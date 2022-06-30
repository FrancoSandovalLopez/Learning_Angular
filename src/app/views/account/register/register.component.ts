import { tap } from 'rxjs/operators';
import { RolesService } from './../../../shared/services/roles/roles.service';
import { Roles } from './../../../shared/models/roles.interface';
import { UserService } from '@shared/services/user/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    Rpassword: new FormControl(''),
  });

  //Roles: any = ['Admin','Author', 'Reader']

  Roles!: Roles[];

  constructor(
    private router: Router,
    private userSvc: UserService,
    private rolesSvc: RolesService
  ) {}

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
    //this.loadRoles();
  }

  submit() {
    if (this.form.valid) {
      const userData = {
        email: this.email?.value,
        password: this.password?.value,
        id_role: 0,
      };
      //console.log(this.form.value);
      //this.submitEM.emit(this.form.value);

      this.userSvc.registerUser(userData).subscribe((res: any) => console.log(res));
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get Rpassword(){
    return this.form.get('Rpassword');
  }

  loadRoles(){
    this.rolesSvc
    .getAllRoles()
    .pipe(tap((roles: Roles[]) => (this.Roles = roles)))
    .subscribe();
  }
}

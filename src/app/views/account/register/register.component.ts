import { tap } from 'rxjs/operators';
import { RolesService } from './../../../shared/services/roles/roles.service';
import { Roles } from './../../../shared/models/roles.interface';
import { UserService } from '@shared/services/user/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = this.password;
    const confirmPassword = this.Rpassword;

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  };

  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
      Rpassword: new FormControl('', [Validators.required]),
    },
    { validators: this.checkPasswords }
  );

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

  /* SUBMIT REQUEST TO API */
  submit() {
    if (this.form.valid) {
      const userData = {
        email: this.email?.value,
        password: this.password?.value,
        id_role: 0,
      };
      //console.log(this.form.value);
      //this.submitEM.emit(this.form.value);

      this.userSvc
        .registerUser(userData)
        .subscribe((res: any) => console.log(res));
    }
  }

  /* CONFIRM VALIDATOR FOR PASSWORD */

  /* GET INPUTS FROM FORM */
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form?.get('password');
  }

  get Rpassword() {
    return this.form?.get('Rpassword');
  }
}

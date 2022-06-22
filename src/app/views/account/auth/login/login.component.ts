import { AuthService } from '@app/views/account/auth/auth.service';
import { User } from '@shared/models/user.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.maxLength(50)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50)
    ]),
  });

  constructor(private router: Router,private authSvc: AuthService) {

  }

  @Input() user!: User;

  @Output() submitEM = new EventEmitter<User>();

  ngOnInit(): void {


    //this.authSvc.login(userData).subscribe(res => console.log('Login'));
  }

  submit() {
    if (this.form.valid) {
      const userData = {
        email: this.email?.value,
        password: this.password?.value,
        id_role: 0
      }

      this.authSvc.login(userData).subscribe(res => console.log('Login'));
    }
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
}

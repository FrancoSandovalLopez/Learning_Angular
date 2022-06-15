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
    email: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    password: new FormControl('',[Validators.required, Validators.minLength(10) ,Validators.maxLength(50)]),
  });

  constructor(private router: Router,private accountSvc: AuthService) { }

  @Input() user!: User;

  @Output() submitEM = new EventEmitter<User>();

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      // console.log(this.form.value.username)
      // this.submitEM.emit(this.form.value);
    
    }
  }
}

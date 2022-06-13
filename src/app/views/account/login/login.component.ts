import { AccountService } from './../../../shared/services/account.service';
import { User } from './../../../models/user.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  user!: User;

  constructor(private router: Router,private accountSvc: AccountService) { }

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();



  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      // console.log(this.form.value.username)
      // this.submitEM.emit(this.form.value);
      this.accountSvc.getUser().subscribe();
    }
  }
}

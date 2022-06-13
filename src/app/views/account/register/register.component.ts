import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    roles: new FormControl('')
  });

  Roles: any = ['Admin','Author', 'Reader']

  constructor() { }

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {
  }
  
  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.submitEM.emit(this.form.value);
    }
  }

}

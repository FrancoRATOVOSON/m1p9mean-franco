import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email!:string
  motDePasse!:string
  loginError!:boolean

  constructor() { }

  ngOnInit(): void {
    this.loginError = false
  }

  onSubmitForm(ngForm: NgForm) {
    console.log(ngForm.value)
  }
}

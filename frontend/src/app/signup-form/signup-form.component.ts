import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  email!: string
  motDePasse!: string
  confirmMotDePasse!: string
  passwordError!: boolean

  constructor() {}

  ngOnInit(): void {}

  onPasswordConfirm() {
    this.passwordError = this.motDePasse === this.confirmMotDePasse
  }
}

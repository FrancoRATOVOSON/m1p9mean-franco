import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

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
  selectedUserType!: string
  userTypes!: string[]

  constructor() {}

  ngOnInit(): void {
    this.userTypes = ['admin', 'client', 'livreur', 'restaurant']
  }

  onPasswordConfirm() {
    this.passwordError = this.motDePasse === this.confirmMotDePasse
  }

  onSubmitForm(ngForm: NgForm) {}
}

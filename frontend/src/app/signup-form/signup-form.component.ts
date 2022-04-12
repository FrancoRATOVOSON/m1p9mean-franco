import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  usertype!: string
  nom!: string
  prenom!: string
  adresse!: string
  photo!: File
  email!: string
  motDePasse!: string
  confirmMotDePasse!: string
  passwordError!: boolean
  selectedUserType!: string
  userTypes!: string[]
  step!: string

  constructor() {}

  ngOnInit(): void {
    this.userTypes = ['client', 'restaurant', 'livreur', 'admin']
    this.usertype = this.userTypes[0]
    this.step = 'userType'
  }

  onPasswordConfirm() {
    this.passwordError = this.motDePasse === this.confirmMotDePasse
  }

  onSubmitForm(ngForm: NgForm) {
    console.log(ngForm.value)
  }

  onNextStep(nextStep: string) {
    this.step = 'loading'
    setTimeout(() => {
      this.step = nextStep
    }, 150)
  }
}

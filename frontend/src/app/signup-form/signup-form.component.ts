import { Component, OnInit } from '@angular/core'
import UserService from '../services/user.service'

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userTypes = ['client', 'restaurant', 'livreur', 'admin']
    this.usertype = this.userTypes[0]
    this.step = 'userType'
  }

  onPasswordConfirm() {
    this.passwordError = this.motDePasse === this.confirmMotDePasse
  }

  onSubmitForm() {
    const formData = new FormData()

    if (this.usertype !== 'admin') {
      formData.append('nom', this.nom)
      if (this.usertype !== 'restaurant') formData.append('prenom', this.prenom)
      if (this.usertype !== 'livreur') formData.append('adresse', this.adresse)
      formData.append('photo', this.photo, this.photo.name)
    }
    formData.append('email', this.email)
    formData.append('motDePasse', this.motDePasse)

    this.userService.signup(formData, this.usertype)
  }

  onFileChanged(event: any) {
    this.photo = event.target.files[0]
  }

  onNextStep(nextStep: string) {
    this.step = 'loading'
    setTimeout(() => {
      this.step = nextStep
    }, 150)
  }
}

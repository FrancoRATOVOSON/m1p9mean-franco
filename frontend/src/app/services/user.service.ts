import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import User from '../models/User.model'

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  loginState: boolean = false
  user!: User
  userType!: string | null
  token: string | null = window.localStorage.getItem('token')

  constructor(private http: HttpClient) {}

  get LoginState() {
    return this.loginState
  }

  set LoginState(value: boolean) {
    this.loginState = value
  }

  toggleLoginState() {
    this.LoginState = !this.loginState
  }

  async signup(formData: FormData, userType: string) {
    console.log(formData)

    this.http
      .post('http://localhost:8080/api/auth/signup/' + userType, formData)
      .subscribe({
        next: response => console.log(response),
        error: err => console.log(err),
      })
  }
}

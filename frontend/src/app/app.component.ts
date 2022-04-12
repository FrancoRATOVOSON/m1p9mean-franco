import { Component, OnInit } from '@angular/core'
import User from './models/User.model'
import UserService from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.token = window.localStorage.getItem('token')
    if (this.userService.token) {
      this.userService.LoginState = true
      this.userService.user = new User()
      this.userService.user.id = window.localStorage.getItem('id')
      this.userService.user.nom = window.localStorage.getItem('nom')
      this.userService.userType = window.localStorage.getItem('userType')
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import UserService from '../services/user.service'

@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css'],
})
export class UserRestaurantComponent implements OnInit {
  nom!: string | null | undefined
  adresse!: string | null | undefined
  photoUrl!: string | null | undefined

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.nom = this.userService.user.nom
    this.adresse = this.userService.user.adresse
    this.photoUrl = this.userService.user.photoUrl
  }

  onLogOut() {
    this.userService.logout()
    this.router.navigateByUrl('')
  }
}

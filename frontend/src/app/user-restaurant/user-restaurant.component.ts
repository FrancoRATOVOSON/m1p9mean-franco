import { Component, OnInit } from '@angular/core'
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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService.user)

    this.nom = this.userService.user.nom
    this.adresse = this.userService.user.adresse
    this.photoUrl = this.userService.user.photoUrl
  }
}

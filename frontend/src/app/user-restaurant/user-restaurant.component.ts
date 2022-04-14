import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import UserService from '../services/user.service'

@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css'],
})
export class UserRestaurantComponent implements OnInit {
  id!: string | null | undefined
  nom!: string | null | undefined
  adresse!: string | null | undefined
  photoUrl!: string | null | undefined
  currentTab!: 'CreateMenu' | 'Menus' | 'Commandes'

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.userService.user.id
    this.nom = this.userService.user.nom
    this.adresse = this.userService.user.adresse
    this.photoUrl = this.userService.user.photoUrl
    this.currentTab = 'Menus'
  }

  onLogOut() {
    this.userService.logout()
    this.router.navigateByUrl('')
  }

  onCreateMenu = () => {
    this.currentTab = 'CreateMenu'
  }

  onMenuCreated = () => {
    this.currentTab = 'Menus'
  }

  onCancelCreateMenu = () => {
    this.currentTab = 'Menus'
  }
}

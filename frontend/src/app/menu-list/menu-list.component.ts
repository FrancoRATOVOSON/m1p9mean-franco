import { Component, Input, OnInit } from '@angular/core'
import MenusService from '../services/menus.service'
import Menu from '../models/Menu.model'

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  @Input() restaurantId?: string
  menus!: Menu[]

  constructor(private menusService: MenusService) {}

  ngOnInit(): void {
    this.menus = this.restaurantId
      ? this.menusService.getMenusByrestaurant(this.restaurantId)
      : this.menusService.getAllMenus()
  }
}

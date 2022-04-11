import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Menu from '../models/Menu.model'
import Restaurant from '../models/Restaurant.model'
import MenusService from '../services/menus.service'
import RestaurantService from '../services/restaurant.service'

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant!: Restaurant
  menus!: Menu[]

  constructor(
    private restaurantService: RestaurantService,
    private menuService: MenusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params['id']
    const foundRestaurant =
      this.restaurantService.getRestaurantById(restaurantId)
    if (foundRestaurant) {
      this.restaurant = foundRestaurant
      this.menus = this.menuService.getMenusByrestaurant(this.restaurant.id)
    } else throw new Error('Restaurant inéxistant')
  }
}

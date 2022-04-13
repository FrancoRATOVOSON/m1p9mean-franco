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
  loading!: boolean
  error!: {
    isError: boolean
    message?: string
  }

  constructor(
    private restaurantService: RestaurantService,
    private menuService: MenusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true
    this.error = { isError: false }
    const restaurantId = this.route.snapshot.params['id']
    this.getRestaurant(restaurantId)
  }

  getRestaurant(restaurantId: string) {
    this.restaurantService.getRestaurantById(
      restaurantId,
      (loading: boolean, restaurant: Restaurant) => {
        this.restaurant = restaurant
        this.menus = this.menuService.getMenusByrestaurant(this.restaurant.id)
        this.loading = loading
      },
      () => {
        this.loading = false
        this.error = { isError: true, message: 'Restaurant inéxistant' }
        throw new Error('Restaurant inéxistant')
      }
    )
  }
}

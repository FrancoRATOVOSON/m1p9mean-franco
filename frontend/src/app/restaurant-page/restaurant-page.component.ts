import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Restaurant from '../models/Restaurant.model'
import RestaurantService from '../services/restaurant.service'

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant!: Restaurant

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params['id']
    const foundRestaurant =
      this.restaurantService.getRestaurantById(restaurantId)
    if (foundRestaurant) this.restaurant = foundRestaurant
    else throw new Error('Restaurant inéxistant')
  }
}

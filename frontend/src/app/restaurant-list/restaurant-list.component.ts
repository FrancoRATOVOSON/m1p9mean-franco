import { Component, OnInit } from '@angular/core'
import Restaurant from '../models/Restaurant.model'
import RestaurantService from '../services/restaurant.service'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants!: Restaurant[]

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.Restaurants
  }
}

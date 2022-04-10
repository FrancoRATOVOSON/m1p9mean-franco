import { Injectable } from '@angular/core'
import Restaurant from '../models/Restaurant.model'

@Injectable({ providedIn: 'root' })
export default class RestaurantService {
  restaurants = [
    new Restaurant(
      '624b38ac2bd90a0902e49875',
      'Morris Park Bake Shop',
      '1007 Morris Park Ave, Bronx'
    ),
    new Restaurant(
      '624c779c96e10d0d93050a29',
      'Palm Restaurant',
      '837 2 Avenue, Manhattan'
    ),
  ]

  getRestaurants() {
    return this.restaurants
  }

  getRestaurantById(id: string) {
    return this.restaurants.find(restaurant => restaurant.id === id)
  }
}

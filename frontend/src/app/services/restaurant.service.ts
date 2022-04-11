import { Injectable } from '@angular/core'
import Restaurant from '../models/Restaurant.model'

@Injectable({ providedIn: 'root' })
export default class RestaurantService {
  restaurants = [
    new Restaurant(
      '624b38ac2bd90a0902e49875',
      'Morris Park Bake Shop',
      '1007 Morris Park Ave, Bronx',
      `Spécialisé dans les fast food, nous sommes garant d'un pure plaisir avec nos tacus, hamburger, pizza et autres délices.`
    ),
    new Restaurant(
      '624c779c96e10d0d93050a29',
      'Palm Restaurant',
      '837 2 Avenue, Manhattan',
      `Goûtez au meilleur de la cuisine chinoise. Depuis 15ans, nous régalons nos clients avec les meilleures recettes asiatiques.`
    ),
  ]

  getRestaurants() {
    return this.restaurants
  }

  getRestaurantById(id: string) {
    return this.restaurants.find(restaurant => restaurant.id === id)
  }
}

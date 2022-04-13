import { Injectable } from '@angular/core'
import Restaurant from '../models/Restaurant.model'
import { Apollo, gql } from 'apollo-angular'

@Injectable({ providedIn: 'root' })
export default class RestaurantService {
  #_restaurants: Restaurant[]

  constructor(private apollo: Apollo) {
    this.#_restaurants = []
  }

  get Restaurants() {
    return this.#_restaurants
  }

  set Restaurants(value: Restaurant[]) {
    this.#_restaurants = value
  }

  getRestaurants(
    onSuccess?: (_loadingstate: boolean) => void,
    onError?: () => void
  ) {
    this.apollo
      .watchQuery<Restaurant[]>({
        query: gql`
          {
            restaurants {
              id
              nom
              description
              adresse
              photoUrl
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        if (result.error) {
          onError && onError()
          return
        }
        this.Restaurants = result.data
        onSuccess && onSuccess(result.loading)
      })
  }

  getRestaurantById(id: string) {
    return this.#_restaurants.find(restaurant => restaurant.id === id)
  }
}

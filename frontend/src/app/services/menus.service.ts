import Menu from '../models/Menu.model'
import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

@Injectable({ providedIn: 'root' })
export default class MenusService {
  #_menus: Menu[]

  constructor(private apollo: Apollo) {
    this.#_menus = []
  }

  get Menu() {
    return this.#_menus
  }

  set Menu(menu: Menu[]) {
    this.#_menus = menu
  }

  getMenus(onSuccess?: (_loadingstate: boolean) => void, onError?: () => void) {
    this.apollo
      .watchQuery<{ menus: Menu[] }>({
        query: gql`
          {
            menus {
              id
              nom
              prix
              restaurant {
                id
                nom
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        if (result.error || result.data.menus.length === 0) {
          onError && onError()
          return
        }
        this.#_menus = result.data.menus
        onSuccess && onSuccess(result.loading)
      })
  }

  getMenusByrestaurant(
    restaurantId: string,
    onSuccess?: (_loadingstate: boolean) => void,
    onError?: () => void
  ) {
    this.apollo
      .watchQuery<{ menusByRestaurant: Menu[] }>({
        query: gql`
          {
            menusByRestaurant(restaurantId: "${restaurantId}") {
              id
              nom
              prix
              restaurant {
                id
                nom
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        if (result.error || result.data.menusByRestaurant.length === 0) {
          onError && onError()
          return
        }
        this.#_menus = result.data.menusByRestaurant
        onSuccess && onSuccess(result.loading)
      })
  }
}

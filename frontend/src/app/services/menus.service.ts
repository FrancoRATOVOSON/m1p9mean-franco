import Menu from '../models/Menu.model'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export default class MenusService {
  menus: Menu[] = [
    new Menu('625172531bd29d758770c150', 'Poisson frit', 13000, {
      id: '624b38ac2bd90a0902e49875',
      nom: 'Morris Park Bake Shop',
    }),
    new Menu('62517c266633a1f2434edc1c', 'Tacos Méxicaine', 6000, {
      id: '624b38ac2bd90a0902e49875',
      nom: 'Morris Park Bake Shop',
    }),
    new Menu('6251e8704443c31d5bb4565e', 'Cordon bleu', 8000, {
      id: '624c779c96e10d0d93050a29',
      nom: 'Parlm Restaurant',
    }),
  ]

  getAllMenus() {
    return this.menus
  }

  getMenusByrestaurant(restaurantId: string) {
    return this.menus.filter(menu => menu.restaurant.id === restaurantId)
  }
}

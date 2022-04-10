import { Injectable } from '@angular/core'
import Commande from '../models/Commande.model'
import Menu from '../models/Menu.model'

@Injectable({ providedIn: 'root' })
export default class CommandeService {
  commandes: Commande[] = [
    {
      menu: new Menu('625172531bd29d758770c150', 'Poisson frit', 13000, {
        id: '624b38ac2bd90a0902e49875',
        nom: 'Morris Park Bake Shop',
      }),
      quantite: 1,
    },
  ]

  getCommandes() {
    return this.commandes
  }

  getCommandeCountforMenu(menu: Menu) {
    const selectedCommande = this.commandes.find(commande =>
      commande.menu.equals(menu)
    )
    if (selectedCommande) return selectedCommande.quantite
    return 0
  }

  addCommande(menu: Menu) {
    const selectedCommande = this.commandes.find(commande =>
      commande.menu.equals(menu)
    )
    if (selectedCommande) {
      selectedCommande.quantite++
      return selectedCommande.quantite
    } else this.commandes.push(new Commande(menu))
    return 1
  }
}

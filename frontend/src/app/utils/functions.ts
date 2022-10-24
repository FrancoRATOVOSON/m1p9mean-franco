import Commande from '../models/Commande.model'
import Menu from '../models/Menu.model'

export function addCommande(commandes: Commande[], menu: Menu): Commande[] {
  const selectedCommande = commandes.find(commande =>
    commande.menu.equals(menu)
  )
  if (selectedCommande) {
    selectedCommande.quantite += 1
    return commandes
  }
  return [...commandes, new Commande(menu)]
}

export function removeCommande(commandes: Commande[], menu: Menu): Commande[] {
  const selectedCommande = commandes.find(commande =>
    commande.menu.equals(menu)
  )
  if (selectedCommande) {
    if (selectedCommande.quantite > 1) {
      selectedCommande.quantite -= 1
      return commandes
    }
    return commandes.filter(
      commande => commande.menu.id !== selectedCommande.menu.id
    )
  }
  return commandes
}

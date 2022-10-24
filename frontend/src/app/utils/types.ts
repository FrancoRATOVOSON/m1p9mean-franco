import Commande from '../models/Commande.model'

export type ActionOptions = {
  onFound?: (foundCommande: Commande) => void
  onNotFound?: () => void
}

import { createReducer, on } from '@ngrx/store'
import Commande from 'src/app/models/Commande.model'
import { addCommande, removeCommande } from 'src/app/utils/functions'
import { add, remove } from './commande.action'

export const commandeReducer = createReducer<Commande[]>(
  [],
  on(add, (commandes, { menu }) => addCommande(commandes, menu)),
  on(remove, (commande, { menu }) => removeCommande(commande, menu))
)

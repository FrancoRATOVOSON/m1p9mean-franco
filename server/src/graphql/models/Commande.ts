import { enumType, objectType } from 'nexus'

export const Etat = enumType({
  name: 'Etat',
  members: ['ATTENTE', 'LIVREE', 'ANNULEE'],
  description: `Les différents états possibles d'une commande :
  - ATTENTE : pour une commande effectuée par l'utilisateur
  - LIVREE : après la livraison de la commande
  - ANNULEE : pour les commandes annulées par les utilisateurs`,
})

export const Commande = objectType({
  name: 'Commande',
  definition(t) {
    t.string('id')
    t.date('date')
    t.field('etat', { type: 'Etat' })
    t.field('client', { type: 'Client' })
  },
})

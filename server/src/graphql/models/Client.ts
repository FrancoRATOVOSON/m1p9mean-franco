import { objectType } from 'nexus'

export default objectType({
  name: 'Client',
  definition(t) {
    t.nonNull.string('id')
    t.string('nom')
    t.string('prenom')
    t.string('adresse')
    t.list.field('commandes', {
      type: 'Commande',
    })
  },
})

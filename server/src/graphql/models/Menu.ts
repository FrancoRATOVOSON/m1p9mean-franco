import { objectType } from 'nexus'

export const Menu = objectType({
  name: 'Menu',
  definition(t) {
    t.string('id')
    t.string('nom')
  },
})

export const def = ''

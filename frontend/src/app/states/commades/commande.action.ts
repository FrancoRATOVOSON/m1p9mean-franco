import Menu from '../../models/Menu.model'
import { createAction, props } from '@ngrx/store'

export const add = createAction('[Commande Menu] Add', props<{ menu: Menu }>())
export const remove = createAction(
  '[Commande Menu] Remove',
  props<{ menu: Menu }>()
)

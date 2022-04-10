import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommandeListComponent } from './commande-list/commande-list.component'
import { HomePageComponent } from './home-page/home-page.component'
import { MenuListComponent } from './menu-list/menu-list.component'
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component'
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent,
  },
  {
    path: 'restaurants/:id',
    component: RestaurantPageComponent,
  },
  {
    path: 'menus',
    component: MenuListComponent,
  },
  {
    path: 'commandes',
    component: CommandeListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}

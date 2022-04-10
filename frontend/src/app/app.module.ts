import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MenuComponent } from './menu/menu.component'
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { CommandeComponent } from './commande/commande.component'
import { MenuListComponent } from './menu-list/menu-list.component'
import { CommandeListComponent } from './commande-list/commande-list.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestaurantComponent,
    CommandeComponent,
    MenuListComponent,
    CommandeListComponent,
  ],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}

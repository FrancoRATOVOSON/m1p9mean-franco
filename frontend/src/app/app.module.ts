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
import AppRoutingModule from './app-routing.module'
import { HeaderComponent } from './header/header.component'
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component'
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component'
import { FormsModule } from '@angular/forms'
import { LoginFormComponent } from './login-form/login-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component'
import { HomePageComponent } from './home-page/home-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { SignupPageComponent } from './signup-page/signup-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestaurantComponent,
    CommandeComponent,
    MenuListComponent,
    CommandeListComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}

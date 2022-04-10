import { Component, OnInit } from '@angular/core'
import Menu from './models/Menu.model'
import Restaurant from './models/Restaurant.model'
import Commande from './models/Commande.model'
import CommandeService from './services/commande.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menus!: Menu[]
  restaurants!: Restaurant[]
  commandes!: Commande[]

  constructor(private commandeService: CommandeService) {}

  ngOnInit() {
    this.menus = [
      new Menu('625172531bd29d758770c150', 'Poisson frit', 13000, {
        id: '624b38ac2bd90a0902e49875',
        nom: 'Morris Park Bake Shop',
      }),
      new Menu('62517c266633a1f2434edc1c', 'Tacos Méxicaine', 6000, {
        id: '624b38ac2bd90a0902e49875',
        nom: 'Morris Park Bake Shop',
      }),
      new Menu('6251e8704443c31d5bb4565e', 'Cordon bleu', 8000, {
        id: '624c779c96e10d0d93050a29',
        nom: 'Parlm Restaurant',
      }),
    ]

    this.restaurants = [
      new Restaurant(
        '624b38ac2bd90a0902e49875',
        'Morris Park Bake Shop',
        '1007 Morris Park Ave, Bronx'
      ),
      new Restaurant(
        '624c779c96e10d0d93050a29',
        'Palm Restaurant',
        '837 2 Avenue, Manhattan'
      ),
    ]

    this.commandes = this.commandeService.getCommandes()
  }
}

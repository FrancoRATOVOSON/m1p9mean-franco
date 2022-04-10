import { Component, Input, OnInit } from '@angular/core'
import Commande from '../models/Commande.model'

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css'],
})
export class CommandeListComponent implements OnInit {
  @Input() commandes!: Commande[]

  constructor() {}

  ngOnInit(): void {}
}

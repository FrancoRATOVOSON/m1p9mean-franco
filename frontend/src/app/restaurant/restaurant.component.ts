import { Component, Input, OnInit } from '@angular/core'
import Restaurant from '../models/Restaurant.model'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant!: Restaurant

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  asideOpen!: boolean

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.asideOpen = false
  }

  toCommandes() {
    this.router.navigateByUrl('commandes')
  }

  onAsideToggle(open: boolean) {
    this.asideOpen = open
  }
}

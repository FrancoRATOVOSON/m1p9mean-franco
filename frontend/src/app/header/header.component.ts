import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  asideOpen!: boolean
  isLoggedIn!: boolean

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.asideOpen = false
    this.isLoggedIn = false
  }

  onAsideToggle(open: boolean) {
    this.asideOpen = open
  }

  onSignupClick() {
    this.router.navigateByUrl('signup')
  }

  onLoginClick() {
    this.router.navigateByUrl('login')
  }
}

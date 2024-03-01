import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  scrollY = 0;
  lastScrollY = 0;
  navEffect = false;
  navHidden = false;

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        this.scrollY = window.scrollY;

        if (this.scrollY === 0) {
            this.navEffect = false;
        } else if (this.lastScrollY < this.scrollY) {
            this.navHidden = true;
        } else {
            this.navEffect = true;
            this.navHidden = false;
        }

        this.lastScrollY = this.scrollY;
    }
}

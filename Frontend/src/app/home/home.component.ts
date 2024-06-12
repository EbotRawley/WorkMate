import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    const clickedInsideNavbar = targetElement.closest('.navbar');
    const clickedOnNavbarLink = targetElement.closest('.nav-link') || targetElement.closest('.navbar-toggler');

    if (!clickedInsideNavbar || clickedOnNavbarLink) {
      const navbarCollapse = document.getElementById('navbarNavDropdown');

      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        this.isMenuOpen = false;

        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          const navbarTogglerElement = navbarToggler as HTMLElement;
          navbarTogglerElement.classList.remove('collapsed');
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      const navbarTogglerElement = navbarToggler as HTMLElement;
      navbarTogglerElement.classList.toggle('collapsed');
    }
  }
}
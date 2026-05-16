import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}

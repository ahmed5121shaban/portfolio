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
  activeSection = signal('#hero');
  progress = signal(0);

  navLinks = [
    { label: 'Home',       href: '#hero' },
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled.set(scrollTop > 60);
    this.progress.set(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);

    const current = this.navLinks
      .map(link => ({ href: link.href, top: document.querySelector(link.href)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY }))
      .filter(section => section.top <= 140)
      .at(-1);

    if (current) {
      this.activeSection.set(current.href);
    }
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}

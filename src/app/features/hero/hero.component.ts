import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ViewportAnimationDirective],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  isBrowser = false;

  roles = ['Full Stack Developer', '.NET & Angular Expert', 'SaaS Architect', 'Clean Code Advocate'];
  currentRole = this.roles[0];
  private roleIndex = 0;

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.cycleRoles();
    }
  }

  private cycleRoles() {
    setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.roleIndex];
    }, 2800);
  }

  scrollToAbout() {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Ahmed_Shaban_Full_CV.pdf';
    link.download = 'Ahmed_Shaban_CV.pdf';
    link.click();
  }
}

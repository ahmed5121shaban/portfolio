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

  roles = ['Full Stack Developer', '.NET & Angular Specialist', 'SaaS Platform Builder', 'Clean Architecture Engineer'];
  currentRole = this.roles[0];
  private roleIndex = 0;

  impactStats = [
    { value: '2+', label: 'Years building production apps' },
    { value: '5+', label: 'Organizations served' },
    { value: '100%', label: 'ZATCA Phase 2 compliance' },
  ];

  resumeSignals = [
    { label: 'Current focus', value: 'Logistics management at MMB', tone: '#22d3a5' },
    { label: 'Core stack', value: 'ASP.NET Core, Angular, SQL Server', tone: '#7c6ff7' },
    { label: 'Architecture', value: 'Multi-tenant SaaS, OAuth2/OIDC, RBAC', tone: '#f59e0b' },
  ];

  studioTiles = [
    { title: 'SaaS', caption: 'Tenant isolation', tone: '#7c6ff7' },
    { title: 'APIs', caption: 'Clean contracts', tone: '#22d3a5' },
    { title: 'LIMS', caption: 'Enterprise labs', tone: '#f59e0b' },
    { title: 'ZATCA', caption: 'Phase 2 ready', tone: '#f43f5e' },
    { title: 'CI/CD', caption: 'Azure DevOps', tone: '#38bdf8' },
    { title: 'RBAC', caption: 'OpenIddict', tone: '#a78bfa' },
  ];

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

  scrollToProjects() {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Ahmed_Shaban_Full_CV.pdf';
    link.download = 'Ahmed_Shaban_CV.pdf';
    link.click();
  }
}

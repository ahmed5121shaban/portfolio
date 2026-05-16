import { Component, signal } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  badge?: string;
  badgeColor?: string;
  accentColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ViewportAnimationDirective],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  activeProject = signal<Project | null>(null);

  projects: Project[] = [
    {
      title: 'LIMS',
      subtitle: 'Quality Laboratory Management System',
      description: 'Enterprise multi-tenant SaaS application for laboratory management with complete data isolation, OAuth2 authentication, and advanced reporting.',
      tags: ['ABP Framework', 'ASP.NET Core', 'Angular', 'OpenIddict', 'DevExpress', 'SQL Server'],
      highlights: [
        'Multi-tenant SaaS with zero cross-tenant data leakage',
        'OAuth2/OIDC via OpenIddict with role-based permissions',
        'DevExpress data grids, reporting dashboards, audit workflows',
        'GDPR-aligned isolated database architecture per tenant',
      ],
      badge: 'Enterprise',
      badgeColor: '#7C6FF7',
      accentColor: '#7C6FF7'
    },
    {
      title: 'ZATCA Integration',
      subtitle: 'E-Invoice Integration System',
      description: 'RESTful API integration with Saudi Arabia\'s ZATCA Fatoora platform achieving 100% Phase 2 compliance for electronic invoice submission and clearance.',
      tags: ['ASP.NET Core', 'RESTful APIs', 'XML/JSON', 'Cryptographic Signing', 'QR Code'],
      highlights: [
        '100% Phase 2 ZATCA Fatoora compliance achieved',
        'Cryptographic signing per ZATCA Phase 2 requirements',
        'QR code generation and XML/JSON invoice formatting',
        'Full Saudi e-invoicing mandate compliance for clients',
      ],
      badge: 'Compliance',
      badgeColor: '#22D3A5',
      accentColor: '#22D3A5'
    },
  ];

  openDetail(project: Project) {
    this.activeProject.set(project);
  }

  closeDetail() {
    this.activeProject.set(null);
  }
}

import { Component, signal } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  category: string;
  metric: string;
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
  activeFilter = signal('All');

  projects: Project[] = [
    {
      title: 'LIMS',
      subtitle: 'Quality Laboratory Management System',
      description: 'Enterprise multi-tenant SaaS application for laboratory management with complete data isolation, OAuth2 authentication, and advanced reporting.',
      category: 'SaaS',
      metric: '5+ orgs',
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
      category: 'Compliance',
      metric: '100% phase 2',
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
    {
      title: 'Logistics Platform',
      subtitle: 'MMB Logistics Management',
      description: 'Full-stack logistics management work focused on scalable APIs, relational models, and Angular operational interfaces.',
      category: 'Operations',
      metric: 'Current',
      tags: ['ASP.NET Core', 'Angular', 'REST APIs', 'Clean Architecture', 'SQL Modeling'],
      highlights: [
        'Building logistics workflows with ASP.NET Core and Angular',
        'Designing relational models and production API boundaries',
        'Collaborating cross-functionally on scalable operational features',
      ],
      badge: 'Current role',
      badgeColor: '#f59e0b',
      accentColor: '#f59e0b'
    },
  ];

  get filters() {
    return ['All', ...new Set(this.projects.map(project => project.category))];
  }

  get visibleProjects() {
    return this.activeFilter() === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === this.activeFilter());
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  openDetail(project: Project) {
    this.activeProject.set(project);
  }

  closeDetail() {
    this.activeProject.set(null);
  }
}

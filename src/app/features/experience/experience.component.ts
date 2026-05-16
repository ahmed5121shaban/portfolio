import { Component } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ViewportAnimationDirective],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'MMB Logistics and Consulting Services',
      period: 'May 2026 \u2013 Present',
      type: 'Full-time \u00B7 Egypt',
      current: true,
      stack: ['ASP.NET Core', 'Angular', 'REST APIs', 'Clean Architecture'],
      highlights: [
        'Developing full-stack logistics management using ASP.NET Core & Angular',
        'Designing RESTful APIs and relational data models with Clean Architecture',
        'Collaborating cross-functionally to deliver scalable logistics solutions',
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'DataBand IT Solutions',
      period: 'Feb 2025 \u2013 May 2026',
      type: 'Full-time \u00B7 Egypt',
      current: false,
      stack: ['ABP Framework', 'OpenIddict', 'EF Core', 'Azure DevOps', 'DevExpress'],
      highlights: [
        'Architected multi-tenant SaaS with ABP Framework across 5+ organizations',
        'Built production REST APIs with ASP.NET Core & Entity Framework Core',
        'Implemented OAuth2/OIDC authentication with OpenIddict and RBAC',
        'Delivered LIMS enterprise platform with DevExpress components',
        'Integrated Azure DevOps CI/CD pipelines for automated deployments',
      ]
    },
    {
      role: 'Front-End Developer (Part-Time)',
      company: 'SH-Prosoft',
      period: 'Aug 2025 \u2013 Feb 2026',
      type: 'Part-time \u00B7 Egypt',
      current: false,
      stack: ['Angular', 'PrimeNG', 'Material', 'NgRx', 'Signals'],
      highlights: [
        'Built responsive Angular apps with PrimeNG & Angular Material',
        'Architected NgRx & Signals state management, eliminating redundant API calls',
        'Delivered pixel-perfect mobile-first components with Tailwind CSS',
      ]
    },
  ];

  trainings = [
    {
      name: 'Full Stack .NET & Angular Program',
      org: 'Information Technology Institute (ITI)',
      period: 'May 2024 \u2013 Oct 2024',
    },
    {
      name: 'Software Engineering Fundamentals',
      org: 'Information Technology Institute (ITI)',
      period: 'Nov 2023 \u2013 Mar 2024',
    },
  ];
}

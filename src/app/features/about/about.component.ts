import { Component } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ViewportAnimationDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  stats = [
    { value: '2+', label: 'Years experience' },
    { value: '5+', label: 'Enterprise projects' },
    { value: '5+', label: 'Organizations served' },
    { value: '100%', label: 'ZATCA compliance' },
  ];

  strengths = [
    'Clean Architecture and SOLID implementation across production APIs',
    'Tenant-isolated SaaS using ABP Framework, SQL Server, OAuth2/OIDC, and RBAC',
    'Angular interfaces with PrimeNG, Material, Tailwind, Signals, and NgRx patterns',
    'CI/CD delivery through Azure DevOps with Agile collaboration',
  ];

  studioFlow = [
    { step: '01', title: 'Discover', text: 'Convert product requirements into clean domain boundaries and API contracts.' },
    { step: '02', title: 'Architect', text: 'Design maintainable .NET services, data models, permissions, and tenant isolation.' },
    { step: '03', title: 'Craft', text: 'Build Angular workflows that feel precise, responsive, and ready for daily use.' },
    { step: '04', title: 'Ship', text: 'Automate delivery, review production behavior, and keep systems easy to evolve.' },
  ];
}

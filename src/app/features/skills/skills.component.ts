import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, ViewportAnimationDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  active = 'All';

  categories = [
    {
      name: 'Back-end',
      icon: 'API',
      color: '#7C6FF7',
      level: 92,
      skills: ['C# / .NET', 'ASP.NET Core', 'Entity Framework Core', 'ABP Framework', 'Dapper', 'xUnit', 'OpenIddict', 'Swagger/OpenAPI']
    },
    {
      name: 'Front-end',
      icon: 'UI',
      color: '#22D3A5',
      level: 90,
      skills: ['Angular 21', 'TypeScript', 'RxJS', 'NgRx / Signals', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Bootstrap']
    },
    {
      name: 'Databases',
      icon: 'DB',
      color: '#F97316',
      level: 82,
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      name: 'Architecture',
      icon: 'SYS',
      color: '#EC4899',
      level: 88,
      skills: ['Clean Architecture', 'Multi-Tenant SaaS', 'SOLID', 'REST API Design', 'OAuth2 / OIDC', 'Domain-Driven Design', 'Microservices']
    },
    {
      name: 'DevOps & Cloud',
      icon: 'OPS',
      color: '#3B82F6',
      level: 76,
      skills: ['Azure DevOps', 'Docker', 'CI/CD Pipelines', 'Git / GitHub']
    },
    {
      name: 'Integrations',
      icon: 'INT',
      color: '#8B5CF6',
      level: 86,
      skills: ['RabbitMQ', 'SignalR', 'Hangfire', 'DevExpress', 'ZATCA / Fatoora API']
    }
  ];

  get filters() {
    return ['All', ...this.categories.map(category => category.name)];
  }

  get visibleCategories() {
    return this.active === 'All'
      ? this.categories
      : this.categories.filter(category => category.name === this.active);
  }

  setActive(filter: string) {
    this.active = filter;
  }
}

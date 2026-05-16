import { Component } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ViewportAnimationDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  categories = [
    {
      name: 'Back-end',
      icon: '\u2699\uFE0F',
      color: '#7C6FF7',
      skills: ['C# / .NET', 'ASP.NET Core', 'Entity Framework Core', 'ABP Framework', 'Dapper', 'xUnit', 'OpenIddict', 'Swagger/OpenAPI']
    },
    {
      name: 'Front-end',
      icon: '\uD83C\uDFA8',
      color: '#22D3A5',
      skills: ['Angular 21', 'TypeScript', 'RxJS', 'NgRx / Signals', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Bootstrap']
    },
    {
      name: 'Databases',
      icon: '\uD83D\uDCC4',
      color: '#F97316',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      name: 'Architecture',
      icon: '\uD83C\uDFD7\uFE0F',
      color: '#EC4899',
      skills: ['Clean Architecture', 'Multi-Tenant SaaS', 'SOLID', 'REST API Design', 'OAuth2 / OIDC', 'Domain-Driven Design', 'Microservices']
    },
    {
      name: 'DevOps & Cloud',
      icon: '\u2601\uFE0F',
      color: '#3B82F6',
      skills: ['Azure DevOps', 'Docker', 'CI/CD Pipelines', 'Git / GitHub']
    },
    {
      name: 'Integrations',
      icon: '\uD83D\uDD0C',
      color: '#8B5CF6',
      skills: ['RabbitMQ', 'SignalR', 'Hangfire', 'DevExpress', 'ZATCA / Fatoora API']
    }
  ];
}

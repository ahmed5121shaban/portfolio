import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly personal = {
    name: 'Ahmed Shaban Mohamed',
    title: 'Full Stack Developer \u00B7 .NET & Angular',
    email: 'ahmed01shaban@gmail.com',
    phone: '+20 112 371 1868',
    location: 'Egypt \u00B7 Open to Remote',
    github: 'https://github.com/ahmed5121shaban',
    linkedin: 'https://www.linkedin.com/in/ahmed-shaban-853172319/',
  };

  readonly roles = [
    'Full Stack Developer',
    '.NET & Angular Expert',
    'SaaS Architect',
    'Clean Code Advocate',
  ];
}

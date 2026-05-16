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
}

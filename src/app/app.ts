import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnDestroy {
  private removeSpotlightListener?: () => void;

  constructor() {
    afterNextRender(() => {
      const root = document.documentElement;

      const onPointerMove = (event: PointerEvent) => {
        root.style.setProperty('--pointer-x', `${event.clientX}px`);
        root.style.setProperty('--pointer-y', `${event.clientY}px`);

        const card = (event.target as HTMLElement).closest<HTMLElement>('.spotlight-card');

        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      };

      const onScroll = () => {
        root.style.setProperty('--scroll-y', `${window.scrollY}px`);
      };

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      this.removeSpotlightListener = () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('scroll', onScroll);
      };
    });
  }

  ngOnDestroy() {
    this.removeSpotlightListener?.();
  }
}

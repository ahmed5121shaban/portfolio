import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Noir from '@primeng/themes/nora';
import { provideGsap, provideLenis } from '@hive-academy/angular-gsap';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    ),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Noir,
        options: { darkModeSelector: 'html', cssLayer: false }
      }
    }),
    provideGsap({
      defaults: { ease: 'power2.out', duration: 0.9 }
    }),
    provideLenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true
    })
  ]
};

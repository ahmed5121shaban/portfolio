import { Component, input } from '@angular/core';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [ViewportAnimationDirective],
  template: `
    <div class="text-center mb-16">
      <p
        viewportAnimation
        [viewportConfig]="{ animation: 'fadeIn', duration: 0.5 }"
        class="text-[#7C6FF7] text-sm font-semibold tracking-widest uppercase mb-4">
        {{ subtitle() }}
      </p>
      <h2
        viewportAnimation
        [viewportConfig]="{ animation: 'slideUp', duration: 0.7, delay: 0.1 }"
        class="font-display text-4xl md:text-5xl font-bold">
        {{ prefix() }} <span class="gradient-text">{{ highlight() }}</span>
      </h2>
      @if (description()) {
        <p
          viewportAnimation
          [viewportConfig]="{ animation: 'fadeIn', duration: 0.6, delay: 0.2 }"
          class="text-[#9D9CB8] text-lg max-w-xl mx-auto mt-4">
          {{ description() }}
        </p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  readonly subtitle = input('');
  readonly prefix = input('');
  readonly highlight = input('');
  readonly description = input('');
}

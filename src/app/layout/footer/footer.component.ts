import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-white/5 bg-[#080810] py-10 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-[#9D9CB8] text-sm">
          &copy; 2026 <span class="text-[#7C6FF7] font-medium">Ahmed Shaban</span>. Built with Angular 21 & Tailwind 4.
        </p>
        <div class="flex items-center gap-6 text-[#9D9CB8] text-sm">
          <a href="https://github.com/ahmed5121shaban" target="_blank" rel="noopener"
            class="hover:text-[#7C6FF7] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ahmed-shaban" target="_blank" rel="noopener"
            class="hover:text-[#7C6FF7] transition-colors">LinkedIn</a>
          <a href="mailto:ahmed01shaban@gmail.com"
            class="hover:text-[#7C6FF7] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

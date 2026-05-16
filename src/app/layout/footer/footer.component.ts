import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-white/8 bg-[#07080d] py-10 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-[#a8adbd] text-sm">
          &copy; 2026 <span class="text-[#7c6ff7] font-medium">Ahmed Shaban</span>
        </p>
        <div class="flex items-center gap-6 text-[#a8adbd] text-sm">
          <a href="https://github.com/ahmed5121shaban" target="_blank" rel="noopener"
            class="hover:text-[#7c6ff7] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ahmed-shaban-853172319/" target="_blank" rel="noopener"
            class="hover:text-[#7c6ff7] transition-colors">LinkedIn</a>
          <a href="mailto:ahmed01shaban@gmail.com"
            class="hover:text-[#7c6ff7] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}

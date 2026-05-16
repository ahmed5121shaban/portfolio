import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewportAnimationDirective } from '@hive-academy/angular-gsap';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ViewportAnimationDirective,
    ButtonModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sending = signal(false);
  sent = signal(false);

  async onSubmit() {
    if (!this.name || !this.email || !this.message) return;
    this.sending.set(true);
    await new Promise(r => setTimeout(r, 1200));
    this.sending.set(false);
    this.sent.set(true);
    this.name = ''; this.email = ''; this.message = '';
  }

  contactLinks = [
    { label: 'Email', value: 'ahmed01shaban@gmail.com', href: 'mailto:ahmed01shaban@gmail.com', icon: '\u2709\uFE0F' },
    { label: 'Phone', value: '+20 112 371 1868', href: 'tel:+201123711868', icon: '\uD83D\uDCDE' },
    { label: 'Location', value: 'Egypt \u00B7 Open to Remote', href: '#', icon: '\uD83D\uDCCD' },
  ];
}

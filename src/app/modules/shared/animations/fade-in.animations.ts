import { trigger, transition, style, animate, state } from '@angular/animations';

export const FadeInAnimation = trigger('fadeIn', [
  state('true', style({
    opacity: 1
  })),
  state('false', style({
    opacity: 0
  })),
  transition('true => false', animate('200ms ease-in-out')),
  transition('false => true', animate('300ms ease-in-out'))
]);

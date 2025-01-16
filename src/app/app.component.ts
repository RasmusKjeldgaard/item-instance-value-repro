import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonItem } from '@ionic/angular/standalone';

export enum ItemSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
}

@Component({
  selector: 'app-root',
  template: ` <ion-item></ion-item> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem],
})
export class AppComponent {}

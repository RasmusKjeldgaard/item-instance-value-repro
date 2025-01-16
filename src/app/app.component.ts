import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  template: ` <ion-item></ion-item> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem],
})
export class AppComponent {}

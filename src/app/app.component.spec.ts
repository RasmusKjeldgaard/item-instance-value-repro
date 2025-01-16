import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { AppComponent } from './app.component';

fdescribe('ItemComponent', () => {
  let spectator: SpectatorHost<AppComponent>;

  const createHost = createHostFactory({
    imports: [],
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createHost('<app-root></app-root>');
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

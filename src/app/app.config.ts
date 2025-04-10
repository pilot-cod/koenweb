import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', component: TrangChuComponent }, // Đảm bảo dòng này tồn tại
  // ... các routes khác
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([{ path: '', component: TrangChuComponent }])]
};

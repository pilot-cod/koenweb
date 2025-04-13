import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { RegisterComponent } from './dang-ky/dang-ky.component';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SanPhamComponent } from './san-pham/san-pham.component';

const appRoutes: Routes = [
  { path: '', component: TrangChuComponent }, // Đảm bảo dòng này tồn tại
  { path: 'dang-ky', component: RegisterComponent },
  { path: 'dang-nhap', component: DangNhapComponent },
  { path: 'san-pham', component: SanPhamComponent }
  // ... các routes khác
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule), // Đảm bảo dòng này tồn tại
  ],
};

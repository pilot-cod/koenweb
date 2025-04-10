// src/app/app.routers.ts (hoặc đường dẫn thực tế đến file của bạn)

import { Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component'; // Đảm bảo đường dẫn này là đúng
//import { SanPhamComponent } from './san-pham/san-pham.component'; // Giả sử bạn có component này
//import { DangNhapComponent } from './dang-nhap/dang-nhap.component'; // Giả sử bạn có component này
//import { DangKyComponent } from './dang-ky/dang-ky.component'; // Giả sử bạn có component này

export const routes: Routes = [
  { path: '', component: TrangChuComponent }, // Route mặc định - hiển thị TrangChuComponent khi truy cập '/'
  //{ path: 'san-pham', component: SanPhamComponent }, // Các route khác của bạn
  //{ path: 'dang-nhap', component: DangNhapComponent },
  //{ path: 'dang-ky', component: DangKyComponent },
  // Thêm các route khác của bạn ở đây
];
import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../sanpham.service';
import { SanPham } from './san-pham.interface';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Import CommonModule và CurrencyPipe

@Component({
  selector: 'app-san-pham',
  standalone: true,
  imports: [CommonModule], // Đảm bảo CommonModule được import
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  danhSachSanPham: SanPham[] = [];
  selectedSanPham: SanPham | null = null;
  loading: boolean = false;
  error: string = '';

  constructor(private sanPhamService: SanphamService) { }

  ngOnInit(): void {
    this.loadDanhSachSanPham();
  }

  loadDanhSachSanPham(): void {
    this.loading = true;
    this.error = '';
    this.sanPhamService.getDanhSachSanPham().subscribe({
      next: (sanPhams) => {
        this.danhSachSanPham = sanPhams;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Lỗi khi tải danh sách sản phẩm.';
        console.error(err);
        this.loading = false;
      }
    });
  }

  xemChiTiet(sanPham: SanPham): void {
    this.selectedSanPham = sanPham;
  }

  dongChiTiet(): void {
    this.selectedSanPham = null;
  }

  // Các phương thức lọc, sắp xếp (nếu cần)
  // ...
}

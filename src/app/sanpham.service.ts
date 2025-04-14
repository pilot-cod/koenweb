import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SanPham } from './san-pham/san-pham.interface';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  private apiUrl = 'http://localhost:5000/api/SanPhams'; // Thay thế bằng API endpoint thực tế của bạn

  constructor(private http: HttpClient) { }

  getDanhSachSanPham(): Observable<SanPham[]> {
    return this.http.get<SanPham[]>(this.apiUrl);
  }

  getSanPhamById(id: number): Observable<SanPham> {
    return this.http.get<SanPham>(`${this.apiUrl}/${id}`);
  }

  // Các phương thức khác bạn có thể cần:
  // thêmSanPham(sanPham: SanPham): Observable<SanPham> {
  //   return this.http.post<SanPham>(this.apiUrl, sanPham);
  // }

  // capNhatSanPham(id: number, sanPham: SanPham): Observable<SanPham> {
  //   return this.http.put<SanPham>(`${this.apiUrl}/${id}`, sanPham);
  // }

  // xoaSanPham(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
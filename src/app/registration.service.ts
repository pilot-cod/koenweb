import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationData, RegistrationResponse, ErrorResponse } from './dang-ky/dang-ky.interface'; // Đảm bảo đường dẫn đúng

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'http://localhost:5000/api/Register'; // Đường dẫn chung đến controller đăng ký

  constructor(private http: HttpClient) {}

  /**
   * Gửi dữ liệu đăng ký người dùng lên backend.
   * @param userData Dữ liệu đăng ký của người dùng.
   * @returns Observable chứa response từ backend (thành công hoặc lỗi).
   */
  registerUser(userData: RegistrationData): Observable<RegistrationResponse | ErrorResponse> {
    return this.http.post<RegistrationResponse | ErrorResponse>(`${this.apiUrl}/register`, userData);
  }

  /**
   * Kiểm tra tính khả dụng của tên đăng nhập trên backend.
   * @param username Tên đăng nhập cần kiểm tra.
   * @returns Observable chứa true nếu khả dụng, false nếu không.
   */
  checkUsernameAvailability(username: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/checkUsernameAvailability`, { username });
  }

  /**
   * Kiểm tra tính khả dụng của địa chỉ email trên backend.
   * @param email Địa chỉ email cần kiểm tra.
   * @returns Observable chứa true nếu khả dụng, false nếu không.
   */
  checkEmailAvailability(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/checkEmailAvailability`, { email });
  }
}
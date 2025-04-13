import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationData, RegistrationResponse, ErrorResponse } from './dang-ky/dang-ky.interface'; // Tạo file interfaces riêng (bước 3)

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private registrationUrl = 'YOUR_BACKEND_API_URL/register'; // Thay thế bằng URL thực tế
  private checkUsernameUrl = 'YOUR_BACKEND_API_URL/check-username'; // Thay thế bằng URL thực tế
  private checkEmailUrl = 'YOUR_BACKEND_API_URL/check-email'; // Thay thế bằng URL thực tế

  constructor(private http: HttpClient) {}

  /**
   * Gửi dữ liệu đăng ký người dùng lên backend.
   * @param userData Dữ liệu đăng ký của người dùng.
   * @returns Observable chứa response từ backend (thành công hoặc lỗi).
   */
  registerUser(userData: RegistrationData): Observable<RegistrationResponse | ErrorResponse> {
    return this.http.post<RegistrationResponse | ErrorResponse>(this.registrationUrl, userData);
  }

  /**
   * Kiểm tra tính khả dụng của tên đăng nhập trên backend.
   * @param username Tên đăng nhập cần kiểm tra.
   * @returns Observable chứa true nếu khả dụng, false nếu không.
   */
  checkUsernameAvailability(username: string): Observable<boolean> {
    const params = { username: username };
    return this.http.get<boolean>(this.checkUsernameUrl, { params });
  }

  /**
   * Kiểm tra tính khả dụng của địa chỉ email trên backend.
   * @param email Địa chỉ email cần kiểm tra.
   * @returns Observable chứa true nếu khả dụng, false nếu không.
   */
  checkEmailAvailability(email: string): Observable<boolean> {
    const params = { email: email };
    return this.http.get<boolean>(this.checkEmailUrl, { params });
  }
}
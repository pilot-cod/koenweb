import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  // Bạn có thể thêm các trường khác từ phản hồi API của bạn
}

interface LoginData {
  usernameOrEmail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = '/api/auth/login'; // Thay thế bằng API endpoint thực tế của bạn

  constructor(private http: HttpClient) { }

  login(loginData: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, loginData);
  }

  // Bạn có thể thêm các phương thức khác liên quan đến đăng nhập ở đây,
  // ví dụ: lưu token vào local storage, kiểm tra token, đăng xuất, v.v.

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Ví dụ về phương thức đăng xuất
  logout(): void {
    this.removeToken();
    // Thực hiện các hành động đăng xuất khác (ví dụ: clear state)
  }
}
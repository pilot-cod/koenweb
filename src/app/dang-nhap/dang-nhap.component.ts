import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service'; // Import LoginService

interface LoginData {
  usernameOrEmail: string;
  password: string;
}

@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css'],
  providers: [LoginService] // Provide LoginService
})
export class DangNhapComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  loginData: LoginData = {
    usernameOrEmail: '',
    password: ''
  };
  loginError = false;
  loginErrorMessage = '';

  constructor(private loginService: LoginService) { } // Inject LoginService

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginError = false;

    if (this.loginForm.valid) {
      this.loginService.login(this.loginData).subscribe(
        (response) => {
          console.log('Đăng nhập thành công:', response);
          // Ví dụ điều hướng: this.router.navigate(['/']);
        },
        (error) => {
          this.loginError = true;
          this.loginErrorMessage = 'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.';
          console.error('Lỗi đăng nhập:', error);
        }
      );
    } else {
      this.loginError = true;
      this.loginErrorMessage = 'Vui lòng nhập đầy đủ thông tin đăng nhập.';
    }
  }
}
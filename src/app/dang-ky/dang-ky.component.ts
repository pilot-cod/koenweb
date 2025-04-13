import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { RegistrationResponse, RegistrationData } from './dang-ky.interface';
import { Observable, Observer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true, // Thêm standalone: true
  imports: [FormsModule, CommonModule],
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registrationForm') registrationForm!: NgForm;
  formData: RegistrationData = { // Khởi tạo formData với đầy đủ thuộc tính
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    birthDate: '',
    gender: '',
    terms: false
  };
  usernameError = '';
  emailError = '';
  passwordMatchError = '';
  termsError = '';
  registrationSuccess = false;
  successMessage = '';
  registrationError = false;
  errorMessage = '';

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.usernameError = '';
    this.emailError = '';
    this.passwordMatchError = '';
    this.termsError = '';
    this.registrationSuccess = false;
    this.registrationError = false;

    // Kiểm tra các trường cơ bản
    if (!this.registrationForm.valid) {
      for (const controlName in this.registrationForm.controls) {
        if (this.registrationForm.controls.hasOwnProperty(controlName) && this.registrationForm.controls[controlName].invalid) {
          this.registrationForm.controls[controlName].markAsTouched();
        }
      }
      return;
    }

    // Kiểm tra tên đăng nhập (ví dụ: gọi API)
    this.checkUsernameAvailability(this.formData.username).subscribe(
      (isAvailable) => { // TypeScript đã có thể suy luận kiểu boolean ở đây
        if (!isAvailable) {
          this.usernameError = 'Tên đăng nhập đã tồn tại.';
          return;
        }

        // Kiểm tra email (ví dụ: gọi API)
        this.checkEmailAvailability(this.formData.email).subscribe(
          (isAvailable) => { // TypeScript đã có thể suy luận kiểu boolean ở đây
            if (!isAvailable) {
              this.emailError = 'Địa chỉ email đã được sử dụng.';
              return;
            }

            // Kiểm tra mật khẩu khớp
            if (this.formData.password !== this.formData.confirmPassword) {
              this.passwordMatchError = 'Mật khẩu không khớp.';
              return;
            }

            // Kiểm tra điều khoản và điều kiện
            if (!this.formData.terms) {
              this.termsError = 'Bạn cần đồng ý với Điều khoản và Điều kiện.';
              return;
            }

            // Gửi dữ liệu đăng ký lên server (ví dụ: gọi API)
            this.registerUser(this.formData).subscribe(
              (response) => { // TypeScript đã có thể suy luận kiểu RegistrationResponse ở đây
                this.registrationSuccess = true;
                this.successMessage = response.message;
                this.registrationForm.resetForm();
              },
              (error: any) => {
                this.registrationError = true;
                this.errorMessage = 'Đã có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau.';
                console.error('Lỗi đăng ký:', error);
              }
            );
          },
          (error: any) => {
            this.emailError = 'Lỗi khi kiểm tra email.';
            console.error('Lỗi kiểm tra email:', error);
          }
        );
      },
      (error: any) => {
        this.usernameError = 'Lỗi khi kiểm tra tên đăng nhập.';
        console.error('Lỗi kiểm tra tên đăng nhập:', error);
      }
    );
  }

  checkUsernameAvailability(username: string): Observable<boolean> { // Khai báo kiểu trả về Observable<boolean>
    // Gọi API để kiểm tra tên đăng nhập
    return new Observable<boolean>((observer: Observer<boolean>) => { // Khai báo kiểu Observable<boolean>
      // Mô phỏng API call
      setTimeout(() => {
        const isTaken = username === 'existinguser';
        observer.next(!isTaken);
        observer.complete();
      }, 500);
    });
  }

  checkEmailAvailability(email: string): Observable<boolean> { // Khai báo kiểu trả về Observable<boolean>
    // Gọi API để kiểm tra email
    return new Observable<boolean>((observer: Observer<boolean>) => { // Khai báo kiểu Observable<boolean>
      // Mô phỏng API call
      setTimeout(() => {
        const isUsed = email === 'used@example.com';
        observer.next(!isUsed);
        observer.complete();
      }, 500);
    });
  }

  registerUser(userData: any): Observable<RegistrationResponse> { // Khai báo kiểu trả về Observable<RegistrationResponse>
    // Gọi API để đăng ký người dùng
    return new Observable<RegistrationResponse>((observer: Observer<RegistrationResponse>) => { // Khai báo kiểu Observable<RegistrationResponse>
      // Mô phỏng API call
      setTimeout(() => {
        const success = true;
        if (success) {
          observer.next({ message: 'Đăng ký thành công' });
          observer.complete();
        } else {
          observer.error({ message: 'Lỗi đăng ký' });
        }
      }, 1000);
    });
  }
}
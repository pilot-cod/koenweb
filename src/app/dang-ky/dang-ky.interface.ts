// src/app/registration/registration.interfaces.ts

export interface RegistrationData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string; // Thêm thuộc tính confirmPassword
  phone?: string;
  address?: string;
  birthDate?: string;
  gender?: string;
  terms: boolean;
}

export interface RegistrationResponse {
  message: string;
  userId?: string;
  // ... các thông tin khác từ backend
}

export interface ErrorResponse {
  message: string;
  statusCode?: number;
  // ... các thông tin lỗi khác từ backend
}
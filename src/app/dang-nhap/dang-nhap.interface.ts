export interface LoginResponse {
  token: string;
  // Bạn có thể thêm các trường khác từ phản hồi API của bạn, ví dụ:
  // userId: number;
  // message: string;
}

export interface LoginData {
  usernameOrEmail: string;
  password: string;
}
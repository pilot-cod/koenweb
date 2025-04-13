export interface SanPham {
  id: number; // Hoặc string, tùy thuộc vào kiểu dữ liệu ID của bạn
  tenSanPham: string;
  moTa?: string; // Mô tả sản phẩm (tùy chọn)
  gia: number;
  imageUrl: string; // Đường dẫn đến hình ảnh sản phẩm
  maSanPham: string; // Mã định danh sản phẩm
  soLuong: number; // Số lượng sản phẩm còn lại trong kho
  // Các thuộc tính khác của sản phẩm (tùy chọn):
  danhMuc?: string;
  nhaSanXuat?: string;
  ngayTao?: Date;
  ngayCapNhat?: Date;
  rating?: number;
  // ... và các thuộc tính khác mà sản phẩm của bạn có
}
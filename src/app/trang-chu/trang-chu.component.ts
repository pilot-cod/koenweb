import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('.banner-slider') bannerSlider!: ElementRef;
  images: HTMLImageElement[] = []; // Lưu trữ danh sách các thẻ img
  currentIndex: number = 0;
  intervalId: any; // Để lưu trữ ID của interval

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Không cần làm gì ở đây
  }

  ngAfterViewInit(): void {
    if (this.bannerSlider && this.bannerSlider.nativeElement) {
      this.images = Array.from(this.bannerSlider.nativeElement.querySelectorAll('img'));
      this.showImage(this.currentIndex); // Hiển thị ảnh đầu tiên khi component được khởi tạo
      this.startAutoSlide(); // Bắt đầu tự động chuyển ảnh
    } else {
      console.error('Error: .banner-slider element not found in the template.');
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide(); // Dừng tự động chuyển ảnh khi component bị hủy
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Đổi ảnh sau mỗi 3 giây (3000 milliseconds) - bạn có thể điều chỉnh giá trị này
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(this.currentIndex);
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage(this.currentIndex);
  }

  showImage(index: number): void {
    this.images.forEach(img => this.renderer.removeClass(img, 'active')); // Loại bỏ class 'active' khỏi tất cả ảnh
    this.renderer.addClass(this.images[index], 'active'); // Thêm class 'active' vào ảnh hiện tại
  }
}
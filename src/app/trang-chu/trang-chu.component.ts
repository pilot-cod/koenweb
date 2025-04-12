import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-trang-chu',
  standalone: true, // Đánh dấu là component standalone
  imports: [CommonModule], // Import CommonModule để sử dụng *ngFor và *ngIf
  templateUrl: './trang-chu.component.html',
  styleUrl: './trang-chu.component.css'
})
export class TrangChuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('.banner-slider') bannerSlider!: ElementRef;
  imageUrls: string[] = [
    'assets/banner1.png',
    'assets/banner4.jpg',
    'assets/hoa.jpg',
    'assets/hoa2.jpg'
  ];
  images: HTMLImageElement[] = [];
  currentIndex: number = 0;
  intervalId: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Không cần làm gì ở đây
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.bannerSlider && this.bannerSlider.nativeElement) {
        this.images = Array.from(this.bannerSlider.nativeElement.querySelectorAll('img'));
        if (this.images.length > 0) {
          this.showImage(this.currentIndex);
          this.startAutoSlide();
        } else {
          console.error('Không có ảnh nào trong banner slider.');
        }
      } else {
        console.error('Error: .banner-slider element not found in the template.');
      }
    }, 0); // Thời gian chờ rất ngắn (0ms), nhưng vẫn đủ để Angular render
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    if (this.imageUrls.length > 1) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.showImage(this.currentIndex);
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    this.showImage(this.currentIndex);
  }

  showImage(index: number): void {
    this.images.forEach(img => this.renderer.removeClass(img, 'active'));
    this.renderer.addClass(this.images[index], 'active');
  }
}
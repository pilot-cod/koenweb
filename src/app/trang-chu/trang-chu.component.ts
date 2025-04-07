import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, AfterViewInit {
  @ViewChild('.banner-slider') bannerSlider!: ElementRef; // Thêm dấu !
  images: string[] = ['assets/banner1.png', 'assets/banner1.png', 'assets/banner1.png', 'assets/banner1.png'];
  currentIndex: number = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Không gọi showImage ở đây nữa
  }

  ngAfterViewInit(): void {
    this.showImage(this.currentIndex); // Gọi showImage sau khi view được khởi tạo
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
    if (this.bannerSlider && this.bannerSlider.nativeElement) { // Kiểm tra để chắc chắn
      const slider = this.bannerSlider.nativeElement as HTMLElement;
      const images = slider.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
      images.forEach((img: HTMLImageElement) => this.renderer.removeClass(img, 'active'));
      this.renderer.addClass(images[index], 'active');
      // Nếu bạn muốn sử dụng translate để tạo hiệu ứng trượt mượt mà hơn:
      // const translateX = -index * 100 + '%';
      // this.renderer.setStyle(slider, 'transform', `translateX(${translateX})`);
    } else {
      console.error('Error: .banner-slider element not found in the template.');
    }
  }
}
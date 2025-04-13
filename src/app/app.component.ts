import { RegisterComponent } from './dang-ky/dang-ky.component';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RegisterComponent], // Thêm RouterLink vào imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'koenweb';

  getCurrentTimestamp(): number {
    return Date.now();
  }
}

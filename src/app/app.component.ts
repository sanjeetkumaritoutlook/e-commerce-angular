import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular';
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  navigatetoUserprofile(): void {
    this.router.navigate(['/user-profile']);
  }
}

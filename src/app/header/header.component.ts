import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  currentTime!: string;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  }
}

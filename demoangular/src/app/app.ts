import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegate } from './navegate/navegate';

@Component({
  selector: 'app-root',
  imports: [Navegate, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

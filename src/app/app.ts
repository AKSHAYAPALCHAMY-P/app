import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';

@Component({
  imports: [RouterOutlet, Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  //template: '<h1 class="text-3xl font-bold underline">Hello, Angular!</h1>',
})
export class App {
  protected readonly title = signal('app');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComentarios } from './components/list-comentarios/list-comentarios';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComentarios, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('proyecto1');
}

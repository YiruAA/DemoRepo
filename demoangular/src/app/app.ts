import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aaron');
  usuarios = [
{ id: 1, nombre: 'Juan', correo: 'juan@example.com', notas: [15, 9, 17], cursos: ['Matemáticas', 'Historia'] },
{ id: 2, nombre: 'Ana', correo: 'ana@example.com', notas: [14, 17, 18], cursos: ['Ciencias', 'Arte'] },
{ id: 3, nombre: 'Pedro', correo: 'pedro@example.com', notas: [19, 18, 19], cursos: ['Inglés', 'Música'] },
];
}

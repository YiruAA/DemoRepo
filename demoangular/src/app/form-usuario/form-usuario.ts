import { Component } from '@angular/core';
import { DemoRest } from '../servicios/demo-rest';
import { inject, Injectable } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Usuario} from '../servicios/demo-rest';

@Component({
  selector: 'app-form-usuario',
  imports: [FormsModule],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.css',
})
export class FormUsuario {

  private demoService = inject(DemoRest);
  response?: Usuario;

  onUsuarios(form: NgForm) {
    console.log('Data del formulario:', form.value);
      this.demoService.getUsuarios().subscribe({
      next: (data) => console.log('Datos recibidos del servicio:', data),
      error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }

  onNuevo(form: NgForm) {
    console.log('Data del formulario:', form.value);
    const nuevo: Usuario = {nombre: form.value.nombre};
    this.demoService.crearUsuario(nuevo).subscribe({
      next: (data) => console.log('Datos recibidos del servicio:', data),
      error: (err) => console.error('Error al llamar al servicio:', err),
    });
}
}
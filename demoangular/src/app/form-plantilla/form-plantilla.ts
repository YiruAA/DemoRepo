import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-plantilla',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-plantilla.html',
  styleUrl: './form-plantilla.css',
})
export class FormPlantilla {
  onEnviar(form: NgForm) {
console.log('Data del formulario:', form.value);
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../servicios/formulario-service';


@Component({
  standalone: true,
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reactive.html',
  styleUrls: ['./form-reactive.css'],
})
export class FormReactivo implements OnInit {
  miForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private formularioService: FormularioService) {}

 ngOnInit(): void {
  this.miForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pais: ['', Validators.required],
    comentarios: ['', Validators.required]
  });
}
  
  onEnviar(): void {

    if (this.miForm.valid) {

      this.formularioService
        .enviarFormulario(this.miForm.value)
        .subscribe({
          next: (resp: string) => {
            console.log(resp);
            this.miForm.reset();
          },
          error: (err: unknown) => {
            console.error(err);
          }
        });

    }

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reactive.html',
  styleUrl: './form-reactive.css',
})
export class FormReactivo implements OnInit {
  miForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

 ngOnInit(): void {
  this.miForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pais: ['', Validators.required],
    comentarios: ['', Validators.required]
  });
}
  
  onEnviar() {
    console.log('Data:', this.miForm.value);
  }
}

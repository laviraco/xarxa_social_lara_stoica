import { ListaComponent } from './../lista/lista.component';
import { modeloUsuario } from './../Models/modeloUsuario';
import { Component, OnInit, Output, Input, EventEmitter, NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  varNuevoUsuario: modeloUsuario = null;

  // Creamos un emisor de eventos que enviará el personaje creado
  @Output() emisorUsuario: EventEmitter<modeloUsuario> = new EventEmitter<modeloUsuario>();

  constructor() { }

  ngOnInit(): void {
  }

  // Funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void {

    // Guardamos los valores del formulario en un personaje nuevo

    console.log(itemForm);


    this.varNuevoUsuario = new modeloUsuario(itemForm.controls.nombre.value,
      itemForm.controls.edad.value,  itemForm.controls.foto.value,
        itemForm.controls.descripcion.value,  itemForm.controls.correo.value,
      itemForm.controls.contraseña.value,  itemForm.controls.contraseña2.value);




    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    this.emisorUsuario.emit(this.varNuevoUsuario);
  }


}

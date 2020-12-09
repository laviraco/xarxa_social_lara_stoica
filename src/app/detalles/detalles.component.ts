import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

import { modeloUsuario } from './../Models/modeloUsuario';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detalle: boolean =false;


  @Input() usuario: modeloUsuario;
  @Output() saveEvent: EventEmitter<modeloUsuario> = new EventEmitter<modeloUsuario>();


  constructor() { }

  ngOnInit(): void {

  }
  comprobarlocalstorage(): void{
    if (localStorage.getItem("usuarionav") != null) {
      this.detalle = true;

 }
 console.log("El detalle tiene valor: "+this.detalle);

  }

  saveCharacter(): void {
    this.saveEvent.emit(this.usuario);
  }


}

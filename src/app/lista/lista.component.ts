import { modeloUsuario } from './../Models/modeloUsuario';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  @Input() usuario: modeloUsuario;
  @Output() saveEvent: EventEmitter<modeloUsuario> = new EventEmitter<modeloUsuario>();


  constructor() { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    this.saveEvent.emit(this.usuario);
  }

}

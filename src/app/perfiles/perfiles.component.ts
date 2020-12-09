import { modeloUsuario } from './../Models/modeloUsuario';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
detalles: boolean = false;

  @Input() usuario: modeloUsuario;
  @Output() saveEvent: EventEmitter<modeloUsuario> = new EventEmitter<modeloUsuario>();
  @Output() deleteEvent: EventEmitter<modeloUsuario> = new EventEmitter<modeloUsuario>();

  constructor() { }

  modeloUsuarioArray: modeloUsuario[] = [];

  modeloUsuarioArraySelected: modeloUsuario=null;

  isCreatingNewChar: boolean = false;



  // Se llama al inicializar el componente
  ngOnInit(): void {
    this.modeloUsuarioArray.push(new modeloUsuario('Ivan', 28,"FotoIvan.png","Alegre pero no mucho","correo@ivan.com","contraseña","contraseña"));

    this.modeloUsuarioArray.push(new modeloUsuario('Lucian', 23,"FotoLucian.png", "Pesado pero no mucho","correo@lucian.pinga.com","contraseña","contraseña"));


    // Cargamos el personaje que tengamos guardado previamente en memoria del navegador
    let usuariosvar = localStorage.getItem('usuarionav');


    this.modeloUsuarioArraySelected = JSON.parse(usuariosvar);
  }

  // Función que se ejecuta al hacer click en un personaje de la lista
  selectCharacter(usuario: modeloUsuario): void {

    // Quitamos la interfaz de crear un personaje
    this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.modeloUsuarioArraySelected = usuario;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('usuarionav', JSON.stringify(usuario));

    console.log(usuario);




  }

  // Función para actualizar el personaje
  updateCharacter(usuario: modeloUsuario): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.modeloUsuarioArraySelected = null;

    // Buscamos un personaje con el mismo nombre y lo actualizamos
    for (let i = 0; i < this.modeloUsuarioArray.length; i++) {
      if (this.modeloUsuarioArray[i].nombre === usuario.nombre) {
        this.modeloUsuarioArray[i].edad = usuario.edad;
        this.modeloUsuarioArray[i].foto = usuario.foto;
        this.modeloUsuarioArray[i].descripcion = usuario.descripcion;
        this.modeloUsuarioArray[i].correo = usuario.correo;
        this.modeloUsuarioArray[i].contraseña=usuario.contraseña;
        this.modeloUsuarioArray[i].contraseña2=usuario.contraseña2;
      }
    }
  }


  // // Función para borrar un personaje
  // deleteCharacter(character: Character) {

  //   // Ponemos el valor en null para que desaparezcan los detalles
  //   this.characterSelected = null;

  //   // Filtramos el array de personajes
  //   this.charactersArray = this.charactersArray.filter(
  //     (char: Character, index: number, array: Character[]) => {

  //       // Si el nombre del personaje es diferente al que tenemos que borrar
  //       if (char.name !== character.name) {

  //         // Guardamos el personaje en el array filtrado
  //         return char;
  //       }
  //     });
  // }


  // Funcion para añadir un nuevo personaje en el array
  addCharacter(nuevoUsuario: modeloUsuario): void {
    this.modeloUsuarioArray.push(nuevoUsuario);

  }

}

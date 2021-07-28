import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions/usuarios.actions';
import { AppState } from 'src/app/store/app.reducers';
//import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []
  loading: boolean = false;
  error: any;
 
 //1. De esta manera es para probar los servicios pero sin ngrx
/*   constructor( public usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsers()
    .subscribe(users =>{
      console.log(users);
      this.usuarios =users;
    })
    
  }
 */


//2. De esta manera se aplica ngrx 
constructor(private store: Store<AppState>){}

ngOnInit(){

  this.store.select('usuarios').subscribe( ({users, loading, error})=> {
    this.usuarios = users;
    this.loading = loading;
    this.error = error;


});

this.store.dispatch(cargarUsuarios());



}

}

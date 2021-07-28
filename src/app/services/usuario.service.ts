import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  private url = 'https://reqres.in/api';
  //private url = 'https://reqres.in/api/users?'
  //private url = 'https://reqres.in/apr1111111'// dirección rota para probar  errores

  constructor(private http: HttpClient) { }

  getUsers() {
   
   return this.http.get(`${this.url}/users?per_page=6&delay=10`)//10 segundos para mostrar el loading
    .pipe(
      map((resp:any) =>{
        return resp['data'];
      })
    )
  }

  getUserById(id : string) {
  
    return this.http.get(`${ this.url },${ id }`)
    .pipe(
      map((resp:any) =>{
        return resp['data'];
      })
    )
  }
 

}

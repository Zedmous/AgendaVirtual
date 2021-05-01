import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url="http://localhost:3000/contactos/";//LA URL DE LA APIREST, aunque es local
  constructor(
    private http:HttpClient
    ) { }

//TODOS ESTOS SON LOS METODOS QUE SE USAN EN AL APIREST

    ///Aqui estan mis operaciones acmes o cruds
    getContactos():Observable<any>{
      return this.http.get(this.url);
    }
    //esto es para obtener todos los contactos registrados
    getProductos():Observable<any>{
      return this.http.get(this.url);
    }
    //esto es para agregar un contacto
    agregarContacto(contacto:Contacto):Observable<any>{
      return this.http.post(this.url,contacto);
    }
    //esto es para consulta unitaria
    consultarContacto(id:string):Observable<any>{
      return this.http.get(this.url + id);
    }
    //esto es para actualizar un contacto
    modificarContacto(id:string,contacto:Contacto):Observable<any>{
      return this.http.put(this.url + id,contacto);
    }
    // esto es para eliminar un contacto
    eliminarContacto(id:string):Observable<any>{
      return this.http.delete(this.url + id);
    }
    
    
    
}

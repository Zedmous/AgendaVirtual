import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url="http://localhost:3000/contactos/";
  constructor(
    private http:HttpClient
    ) { }

    ///Aqui estan mis operaciones acmes o cruds
    getContactos():Observable<any>{
      return this.http.get(this.url);
    }
    getProductos():Observable<any>{
      return this.http.get(this.url);
    }
    agregarContacto(contacto:Contacto):Observable<any>{
      return this.http.post(this.url,contacto);
    }
    consultarContacto(id:string):Observable<any>{
      return this.http.get(this.url + id);
    }
    modificarContacto(id:string,contacto:Contacto):Observable<any>{
      return this.http.put(this.url + id,contacto);
    }
    eliminarContacto(id:string):Observable<any>{
      return this.http.delete(this.url + id);
    }
    
    
    
}

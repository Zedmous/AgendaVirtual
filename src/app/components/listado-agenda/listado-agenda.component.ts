import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-listado-agenda',
  templateUrl: './listado-agenda.component.html',
  styleUrls: ['./listado-agenda.component.css']
})
export class ListadoAgendaComponent implements OnInit {
  listaContactos:Contacto[]=[];
  encontrado=false;
  busquedaForm:FormGroup;
  id:string|null;

  constructor(
    private _contactoServicio:ContactoService,
    private fb:FormBuilder,
    private toastr: ToastrService
  ) {
    this.busquedaForm=this.fb.group({
      busqueda:['',Validators.required]
    });
  }

  ngOnInit(): void {
    //this.obtenerContactos();
  }
  obtenerContactos(){
    this._contactoServicio.getContactos().subscribe(data=>{
      this.listaContactos=data;
    },error=>{
      console.log(error);
    });
  }
  buscandoContacto(){
    let dato=this.busquedaForm.get('busqueda')?.value;//capturo el dato de la caja de texto
    if(dato=="8565203"){
      this.encontrado=false;
      let data={
        _id:1,
        nombre:"Eduardo",
        apellido:"Nieves",
        telefono:"04160534987"
      };
      this.listaContactos.push(data);

    }else{
      this.encontrado=true;
    }
  }
}

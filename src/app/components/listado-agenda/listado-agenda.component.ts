import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private toastr: ToastrService,
    private router:Router
  ) {
    this.busquedaForm=this.fb.group({
      busqueda:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerContactos();
  }
  obtenerContactos(){
    this._contactoServicio.getContactos().subscribe(data=>{
      this.listaContactos=data;
    },error=>{
      console.log(error);
    });
  }
  //metodo para solo buscar un contacto
  buscandoContacto(){
    const DATO=this.busquedaForm.get('busqueda')?.value;//capturo el dato de la caja de texto
    this._contactoServicio.consultarContacto(DATO).subscribe(data=>{
      console.log("DATOS DE LA API",data);
      if(DATO==data.id){
        this.listaContactos=data;
        this.toastr.success(`El contacto de ID:${DATO} ha sido encontrado` ,"Contacto Encontrado!");
        this.router.navigate(['/editar-contacto',data.id]);
        //this.obtenerContactos();
        this.encontrado=true;
      }else if(data.status== 404){
        this.toastr.error(`El contacto de ID:${DATO} no ha sido encontrado` ,"Contacto no Encontrado!");
        
      }
    },error=>{
      //console.log(error);
      this.encontrado=false;
      if(!this.encontrado){
        this.toastr.error(`El contacto de ID:${DATO} no ha sido encontrado` ,"Contacto no Encontrado!");
        this.busquedaForm.setValue({
          busqueda:null
        });
      }
    });

  }
  //elimi
  eliminarContacto(id:any){
    this._contactoServicio.eliminarContacto(id).subscribe(data=>{
      this.toastr.error(`El contacto fue eliminado con exito` ,"Contacto Eliminado!");
      this.obtenerContactos();
    },error=>{
      console.log(error);
    });
    
  }
}

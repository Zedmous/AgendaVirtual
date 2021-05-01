import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from '../../models/contacto';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  contactoForm:FormGroup;
  id:string|null;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private _contactoService:ContactoService,
    private aRoute:ActivatedRoute
    ) { 
    this.contactoForm=this.fb.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      apellido:['',Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();//Debemos cargarlo al iniciar este componente ya que queremos editarlo en caso de que sea 
  }

  agregarContacto(){
    //OBTENGO LOS DATOS DEL FORMULARIO Y CREO UN DE TIPO CONTACTO
    const DATOS:Contacto={
      nombre:this.contactoForm.get('nombre')?.value,
      apellido:this.contactoForm.get('apellido')?.value,
      telefono:this.contactoForm.get('telefono')?.value
    };
    console.log(DATOS);//esto es un vigilante , solo me sirve paraver si captura los datos

    if(this.id !==null){
      //para actualizar los datos de un contacto, ya que el id es no nulo
      this._contactoService.modificarContacto(this.id,DATOS).subscribe(data=>{
        this.toastr.info('Datos del contacto actualizados exitosamente', 'Contacto Actualizado');
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
        this.contactoForm.reset();
      });
    }else{
      //para guardar los datos de un contacto, ya que el id es nulo
      this._contactoService.agregarContacto(DATOS).subscribe(data=>{
        this.toastr.success('Datos del contacto registrados exitosamente', 'Contacto Registrado');
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
        this.contactoForm.reset();
      });
    }
    
  }
  esEditar(){
    if(this.id!==null){//este metodo servira para cargar los datos del contacto que editaremos
      this._contactoService.consultarContacto(this.id).subscribe(data=>{
        this.contactoForm.setValue({
          nombre:data.nombre,
          apellido:data.apellido,
          telefono:data.telefono
        });
      });
    }
  }
  
}

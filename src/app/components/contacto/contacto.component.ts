import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
    ) { 
    this.contactoForm=this.fb.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      apellido:['',Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  agregarContacto(){
    const DATOS:Contacto={
      nombre:this.contactoForm.get('nombre')?.value,
      apellido:this.contactoForm.get('apellido')?.value,
      telefono:this.contactoForm.get('telefono')?.value
    };
    console.log(DATOS);
    this.toastr.info('Contacto guardado exitosamente', 'Contacto Guardado!');
    this.router.navigate(['./']);
   
  }
}

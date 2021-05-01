import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listado-agenda',
  templateUrl: './listado-agenda.component.html',
  styleUrls: ['./listado-agenda.component.css']
})
export class ListadoAgendaComponent implements OnInit {
  busquedaForm:FormGroup;
  id:string|null;

  constructor(
    private fb:FormBuilder,
    private toastr: ToastrService
  ) {
    this.busquedaForm=this.fb.group({
      busqueda:['',Validators.required]
    });
  }

  ngOnInit(): void {

  }
  buscandoContacto(){
    console.log("Oye imbecil revisa");
  }
}

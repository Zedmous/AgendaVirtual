import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAgendaComponent } from './components/listado-agenda/listado-agenda.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
  {path:'',component:ListadoAgendaComponent},//ruta raiz
  {path:'crear-contacto',component:ContactoComponent},//PARA AGREGAR UN CONTACTO
  {path:'editar-contacto/:id',component:ContactoComponent},//PARA EDITAR UN CONTACTO
  { path: '**',   redirectTo: '', pathMatch: 'full' }//PARA REDIRECCIONAR EN CASO DE QUE SEA ERRONEA
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

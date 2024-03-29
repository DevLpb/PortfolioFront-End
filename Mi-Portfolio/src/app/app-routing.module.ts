import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeduc', component: NewEducacionComponent},
  {path:'editeduc/:id', component: EditEducacionComponent},
  {path:'nuevaskill', component: NewHabilidadesComponent},
  {path:'editskill/:id', component: EditHabilidadesComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent},
  {path:'nuevoproyecto', component: NewProyectosComponent},
  {path:'editproyecto/:id', component: EditProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

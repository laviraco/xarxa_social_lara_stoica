import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from './perfiles/perfiles.component';

// import { InicioComponent } from './inicio/inicio.component';importamos los componentes



const routes: Routes = [
  // { path: 'inicio', component: InicioComponent }, aqui vamos a poner las rutas de los componentes
  { path: 'Perfiles', component: PerfilesComponent },
  { path: 'Inicio', component: HomeComponent },
  { path: 'Admin', component: AdminComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

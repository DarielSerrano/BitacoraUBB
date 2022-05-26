import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BitacoraListComponent } from './components/bitacora-list/bitacora-list.component';
import { BitacoraFormComponent } from './components/bitacora-form/bitacora-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bitacoras',
    pathMatch: 'full'
  },
  {
    path: 'bitacoras',
    component: BitacoraListComponent
  },
  {
    path: 'bitacoras/add',
    component: BitacoraFormComponent
  },
  {
    path: 'bitacoras/edit/:idbitacora',
    component: BitacoraFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

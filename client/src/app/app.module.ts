import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BitacoraFormComponent } from './components/bitacora-form/bitacora-form.component';
import { BitacoraListComponent } from './components/bitacora-list/bitacora-list.component';

import {BitacorasService} from './services/bitacoras.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BitacoraFormComponent,
    BitacoraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BitacorasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';

import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresupuestoService } from './service/presupuesto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

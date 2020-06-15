import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BandsComponent} from "./bands/bands.component";
import { BandCardComponent} from "./bandCard/bandCard.component";
import {NewBandComponent} from "./newBand/newBand.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {FormsModule} from "@angular/forms";
// import {ReactiveFormsModule} from "@angular/forms";
// import {SafeUrlPipe} from "./pipes/safeUrl.pipe";




@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandCardComponent,
    NewBandComponent,
    PruebaComponent,
    // SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

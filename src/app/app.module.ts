import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent} from "./list/list.component";
import { CardComponent} from "./card/card.component";
import {FormComponent} from "./form/form.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {FormsModule} from "@angular/forms";
// import {SafePipe} from "./pipes/safe.pipe";
// import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    FormComponent,
    PruebaComponent,
    // SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

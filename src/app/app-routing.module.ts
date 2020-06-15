import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BandsComponent} from "./bands/bands.component";
import {BandCardComponent} from "./bandCard/bandCard.component";
import {NewBandComponent} from "./newBand/newBand.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: BandsComponent, pathMatch: 'full'},
  {path: 'list', component: BandsComponent},
  {path: 'band/:id', component: BandCardComponent, pathMatch: 'prefix'},
  {path: 'form', component: NewBandComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: '**', component: AppComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

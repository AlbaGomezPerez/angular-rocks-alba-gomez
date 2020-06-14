import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CardComponent} from "./card/card.component";
import {FormComponent} from "./form/form.component";
import {PruebaComponent} from "./prueba/prueba.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: ListComponent, pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'band/:id', component: CardComponent, pathMatch: 'prefix'},
  {path: 'form', component: FormComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: '**', component: AppComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {ListComponent} from "./list/list.component";
import {CardComponent} from "./card/card.component";



const routes: Routes = [
  {path: '',redirectTo:'/list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'band', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ExposantComponent } from './exposant/exposant.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { SaraComponent } from './sara/sara.component';
import { MbayeComponent } from './mbaye/mbaye.component';
import { SeyfeddineComponent } from './seyfeddine/seyfeddine.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "exposant", component: ExposantComponent },
  { path: "home", component: HomeComponent },
  { path: "us", component: UsComponent },
  { path: "sara", component: SaraComponent },
  { path: "mbaye", component: MbayeComponent },
  { path: "seyfeddine", component: SeyfeddineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

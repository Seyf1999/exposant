import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExposantComponent } from './exposant/exposant.component';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { SaraComponent } from './sara/sara.component';
import { SeyfeddineComponent } from './seyfeddine/seyfeddine.component';
import { MbayeComponent } from './mbaye/mbaye.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExposantComponent,
    HomeComponent,
    UsComponent,
    SaraComponent,
    SeyfeddineComponent,
    MbayeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './home/home.component';
import { GuessingGridComponent } from './guessing-grid/guessing-grid.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NameGridComponent } from './name-grid/name-grid.component';
import { WhereInTheWorldComponent } from './where-in-the-world/where-in-the-world.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    GuessingGridComponent,
    NameGridComponent,
    WhereInTheWorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

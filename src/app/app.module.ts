import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistanceComponent } from './calculator/resistance/resistance.component';
import { CalculateServiceService } from './services/calculate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ResistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CalculateServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './pages/city-list/city-list.component';
import { CityComponent } from './pages/city-list/components/city/city.component';
import { HeaderComponent } from './pages/city-list/components/header/header.component';
import { FooterComponent } from './pages/city-list/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

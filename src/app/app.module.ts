import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponets/navbar/navbar.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { FooterComponent } from './MyComponets/footer/footer.component';
import { SideMenuComponent } from './MyComponets/side-menu/side-menu.component';
import { MainComponent } from './MyComponets/main/main.component';
import { PlantsComponent } from './MyComponets/plants/plants.component';
import { CalenderComponent } from './calender/calender.component';
import { AboutComponent } from './MyComponets/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SideMenuComponent,
    MainComponent,
    PlantsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

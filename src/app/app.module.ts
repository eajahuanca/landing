import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { MissionComponent } from './componentes/mission/mission.component';
import { ServicesComponent } from './componentes/services/services.component';
import { ClassesComponent } from './componentes/classes/classes.component';
import { TestimonialComponent } from './componentes/testimonial/testimonial.component';
import { PricesComponent } from './componentes/prices/prices.component';
import { TrainersComponent } from './componentes/trainers/trainers.component';
import { ContactsComponent } from './componentes/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    MissionComponent,
    ServicesComponent,
    ClassesComponent,
    TestimonialComponent,
    PricesComponent,
    TrainersComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

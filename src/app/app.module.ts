import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

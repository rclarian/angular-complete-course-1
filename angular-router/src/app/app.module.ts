import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    LoginComponent,
    NotFoundComponent,
    CheckoutComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule, //added the routing module
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

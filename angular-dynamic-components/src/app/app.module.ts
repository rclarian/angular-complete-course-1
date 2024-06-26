import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { ViewContainer } from './viewContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ConfirmDeleteComponent,
    ViewContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
  //entryComponents: [ConfirmDeleteComponent], //add this for the lower version of Angular 8 and below
})
export class AppModule { }

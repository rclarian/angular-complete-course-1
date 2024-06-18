import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ContainerComponent } from './container/container.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { ParentComponent } from './demo-test/parent/parent.component';
import { TestComponent } from './demo-test/test/test.component';
import { ChildComponent } from './demo-test/parent/child/child.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { SampleDirective } from './CustomDirectives/sample.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
import { StyleDirective } from './CustomDirectives/style.directive';
import { IfDirective } from './CustomDirectives/if.directive';
import { Comp1Component } from './demo-test/comp1/comp1.component';
import { Comp2Component } from './demo-test/comp2/comp2.component';
import { Header1Component } from './demo-test/header1/header1.component';
import { Admin1Component } from './demo-test/header1/admin1/admin1.component';
import { Home1Component } from './demo-test/header1/home1/home1.component';
import { Hero1Component } from './demo-test/header1/home1/hero1/hero1.component';
import { Sidebar1Component } from './demo-test/header1/home1/sidebar1/sidebar1.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserList1Component } from './demo-test/header1/admin1/user-list1/user-list1.component';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { UserDetail1Component } from './demo-test/header1/admin1/user-detail1/user-detail1.component';

export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    MainMenuComponent,
    TopMenuComponent,
    ContainerComponent,
    FeaturedBrandsComponent,
    ProductDetailComponent,
    ProductListComponent,
    SearchComponent,
    FilterComponent,
    ProductComponent,
    DemoTestComponent,
    ParentComponent,
    TestComponent,
    ChildComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    SampleDirective,
    DisableProductDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
    Comp1Component,
    Comp2Component,
    Header1Component,
    Admin1Component,
    Home1Component,
    Hero1Component,
    Sidebar1Component,
    UserList1Component,
    UserDetail1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    SubscribeService,
    {provide: USER_TOKEN, useClass: UserService}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

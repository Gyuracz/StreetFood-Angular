import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environment/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainService } from './main/main.service';
import { API_BASE_URL_MENU, MenuService } from './menu/menu.service';
import { AboutService } from './about/about.service';
import { AdminService, API_BASE_URL_ADMIN } from './admin/admin.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainService,
    MenuService,
    AboutService,
    AdminService,
    { provide: API_BASE_URL_MENU, useValue: environment.backendUrl },
    { provide: API_BASE_URL_ADMIN, useValue: environment.backendUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

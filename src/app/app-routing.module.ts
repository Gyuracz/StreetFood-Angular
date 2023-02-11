import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "menu", component: MenuComponent},
  {path: "about", component: AboutComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

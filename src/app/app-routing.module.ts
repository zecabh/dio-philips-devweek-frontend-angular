import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ReportComponent } from './views/report/report.component';

const routes: Routes = [{
    path:"",
    component: HomeComponent
},
{  path:"report",
  component: ReportComponent
},
{  path:"contact",
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

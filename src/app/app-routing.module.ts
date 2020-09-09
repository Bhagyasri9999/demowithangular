import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import {TestComponent} from './components/test/test.component';




const routes: Routes = [

  { path: '', component: HomeComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'about', component: AboutComponent  },

  { path: 'employee', component: EmployeeComponent  },
  { path: 'employeelist', component: EmployeelistComponent  },
  {path : 'reactive-form', component:ReactiveFormComponent},
  {path : 'user', component:UserComponent},
 { path : 'add-user', component:AddUserComponent},
  { path : 'bindingsdemo', component:BindingsdemoComponent},
  { path :  'ngclassdemo', component:NgclassdemoComponent},
  {path : 'test',component:TestComponent}
 // { path: 'emp', component: EmployeeComponent, canActivate: [AuthGuard] }
  
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AboutComponent } from './components/about/about.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';

import { AddUserComponent } from './components/add-user/add-user.component';
import { HttpClientModule} from '@angular/common/http';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { TestComponent} from './components/test/test.component'









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmployeeComponent,
    GenderPipe,
    AboutComponent,
    EmployeelistComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    BindingsdemoComponent,
    NgclassdemoComponent,
    TestComponent,
    //BindingsdemoComponent,
    
    
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';
import { ParentMsgComponent } from './parent-msg/parent-msg.component';
import { ChildMsgComponent } from './child-msg/child-msg.component';
@NgModule({
  declarations: 
  [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    NavbarComponent,
    DisplayContactComponent,
    EditContactComponent,
    AdminComponent,
    ErrorPageComponent,
    DisplayApiComponent,
    PipeComponent,
    State1Component,
    State2Component,
    ParentComponent,
    ChildComponent,
    TestComponent,
    ParentMsgComponent,
    ChildMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


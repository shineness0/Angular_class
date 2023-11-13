import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { adminGuard } from './guards/admin.guard';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
import { SignupComponent } from './signup/signup.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { ChildMsgComponent } from './child-msg/child-msg.component';
import { ParentMsgComponent } from './parent-msg/parent-msg.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'apii', component:DisplayApiComponent },
  {path: 'test', component:TestComponent },
  {path: 'parent', component:ParentComponent },
  {path: 'parent_msg', component:ParentMsgComponent },
  {path: 'child_msg', component:ChildMsgComponent },
  {path: 'child', component:ChildComponent },
  {path: 'signup', component:SignupComponent },
  {path: 'pipe', component:PipeComponent },
  {path: 'login', component:LoginComponent },
  {path: 'editContact', component:EditContactComponent },
  {path: 'admin', component:AdminComponent},
  {path: 'state', component:State1Component},
  {path: 'state2', component:State2Component},
  {path: 'contact', children:[
    {path: '', component:ContactComponent },
    {path: ':id', component:DisplayContactComponent}
  ] },
    {path: '**', component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

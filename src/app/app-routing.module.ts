import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCreateComponent } from './pages/form-create/form-create.component';
import { FormVoteComponent } from './pages/form-vote/form-vote.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyFormsComponent } from './pages/my-forms/my-forms.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"form-create", component:FormCreateComponent},
  {path:"form-vote/:id", component:FormVoteComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"my-forms", component:MyFormsComponent},
  {path:"", component:HomeComponent},
  {path:"404", redirectTo:"/"},
  {path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

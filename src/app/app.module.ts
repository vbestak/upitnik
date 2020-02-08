import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UpitnikComponent } from './components/upitnik/upitnik.component';
import { FormVoteComponent } from './pages/form-vote/form-vote.component';
import { FormCreateComponent } from './pages/form-create/form-create.component';
import { UpitnikVoteComponent } from './components/upitnik-vote/upitnik-vote.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { Interceptor } from './services/interceptor';
import { UpitnikViewComponent } from './components/upitnik-view/upitnik-view.component';
import { MyFormsComponent } from './pages/my-forms/my-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    UpitnikComponent,
    FormVoteComponent,
    FormCreateComponent,
    UpitnikVoteComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponent,
    UpitnikViewComponent,
    MyFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './routes/routes.routing';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(loginRoutes)
  ],
  declarations: [LoginComponent],
 // bootstrap: [LoginModule]
})
export class LoginModule { }

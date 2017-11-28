import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    UserSigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}

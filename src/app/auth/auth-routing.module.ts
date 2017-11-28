
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {NgModule} from '@angular/core';
import {UserSigninComponent} from "./user-signin/user-signin.component";

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'user-signin', component: UserSigninComponent}
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

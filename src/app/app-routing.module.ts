import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {NgModule} from '@angular/core';

const appRoutes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


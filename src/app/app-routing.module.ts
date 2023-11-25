import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { ChildComponent } from './secure/child/child.component';
import { PublicComponent } from './public/public.component';
import { PublicChildComponent } from './public/public-child/public-child.component';
import { authGuard } from './services/auth.guard';
import { validateFormGuard } from './services/validate-form.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'secure',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: SecureComponent
      },
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  },
  {
    path: 'public',
    children: [
      {
        path: '',
        component: PublicComponent
      },
      {
        path: 'child',
        component: PublicChildComponent,
        canDeactivate: [validateFormGuard]
      }
    ]
  }, 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

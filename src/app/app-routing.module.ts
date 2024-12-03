import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { PutApiComponent } from './put-api/put-api.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:'get-api',
  },
  {
    path:'get-api',
    component:GetApiComponent
  },
  
  {
    path:'post-api',
    component:PostApiComponent
  },
  {
    path:'put-api',
    component:PutApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './MyComponets/main/main.component';
import { FooterComponent } from './MyComponets/footer/footer.component';
import { PlantsComponent } from './MyComponets/plants/plants.component';
import { CalenderComponent } from './calender/calender.component';
import { AboutComponent } from './MyComponets/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', // Redirect to home component when path is empty
    pathMatch: 'full' // Ensure that the path is exactly empty for redirection
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'home',
    component:MainComponent
  },
  {
    path:'plants',
    component:PlantsComponent
  },
  {
    path:'calendar',
    component:CalenderComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

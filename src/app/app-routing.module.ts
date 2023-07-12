import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';
import { HomeComponent } from './home/home.component';
import { EnrollformComponent } from './enrollform/enrollform.component';

const routes: Routes = [
  // Other routes
  { path: '',          component: HomeComponent },
  { path: 'courselist', component: CourselistComponent},
  { path: 'enrollform', component: EnrollformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

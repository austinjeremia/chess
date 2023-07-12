import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourselistComponent } from './courselist/courselist.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrollformComponent } from './enrollform/enrollform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courselist', component: CourselistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    HomeComponent,
    EnrollformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

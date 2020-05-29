import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons.service';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    LessonsListComponent,
    UsersComponent
  ],
  providers: [
    CoursesService,
    LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

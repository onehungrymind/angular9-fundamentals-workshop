import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;

  // CHALLENGE
  // STEP 01: Create a LessonsService
  // hint: ng g s shared/services/lessons -d
  // STEP 02: Add the lessons service to app.module
  // STEP 03: Inject lessons service into component
  // STEP 04: Move lessons to service and consume in component

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}

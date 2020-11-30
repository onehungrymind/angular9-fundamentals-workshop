import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 25,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript Fundamentals',
      description: 'Learn the fundamentals of Javascript',
      percentComplete: 75,
      favorite: false
    },
    {
      id: 3,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of React',
      percentComplete: 100,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    
  }
}

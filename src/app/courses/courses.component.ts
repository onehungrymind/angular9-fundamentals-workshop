import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Angular 6 Fundamentals',
      description: 'Learn the fundamentals of Angular 6',
      percentComplete: 34,
      favorite: true,
    },
    {
      id: 3,
      title: 'Start with Why',
      description: 'Why businesses fail',
      percentComplete: 74,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse() {
    console.log("Save course")
  }

  selectCourse(course: string) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    this.courses.filter((course) => course.id !== courseId);
  }
}

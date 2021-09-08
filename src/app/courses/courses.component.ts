import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Some Other Stuff',
      description: 'Im gonna be successful oneday',
      percentComplete: 85,
      favorite: false
    }
  ];

  constructor() { }

  selectCourse(course) {
    this.currentCourse = course
  }

  deleteCourse(id) {
    console.log(id)
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: "",
      percentComplete: 0,
      favorite: false
    }

    this.currentCourse = emptyCourse
  }

  ngOnInit(): void {
    this.resetSelectedCourse()
  }

  cancel() {
    this.resetSelectedCourse()
  }

  saveCourse() {
    console.log("Saev Course")
  }

}

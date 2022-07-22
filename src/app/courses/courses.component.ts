import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null;
  title = 'Hello asdasdsa';

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
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

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
    }

    this.currentCourse = emptyCourse

  }

  addIdToCourse() {
    // this.currentCourse.id = this.courses.length + 1
  }

  selectedCourse(course) {
    this.currentCourse = course
    console.log('Current Course is', course)
  }

  deleteCourse(courseId) {
    console.log(courseId);
  }

  cancel() {
    this.resetSelectedCourse()
  }

  saveCourse() {
    this.courses.push(this.currentCourse)
    console.log(this.courses)
  }

  setFavoriteStatus() {
    this.currentCourse.favorite === false ? this.currentCourse.favorite = true : this.currentCourse.favorite = false;
    this.currentCourse.favorite === true ? this.currentCourse.favorite = false : this.currentCourse.favorite = true;
  }
}

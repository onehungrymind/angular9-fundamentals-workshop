import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null
  courses = null

  constructor(private coursesService: CoursesService) { }

  selectCourse(course) {
    this.currentCourse = course
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.refreshCourses())
      console.log(23)
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
    this.loadCourses()
  }

  refreshCourses() {
    this.resetSelectedCourse()
    this.loadCourses()
  }

  loadCourses() {
    this.coursesService.all()
    .subscribe(courses => this.courses = courses)
  }

  cancel() {
    this.resetSelectedCourse()
  }

  saveCourse(course) {
    if (course.id){
      this.coursesService.update(course)
        .subscribe(result => this.refreshCourses())
    }
    else{
      this.coursesService.create(course)
        .subscribe(result => this.refreshCourses())
    }
  }
}
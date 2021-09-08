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
    this.courses = this.coursesService.all()
  }

  cancel() {
    this.resetSelectedCourse()
  }

  saveCourse(course) {
    if (course.id){
      this.coursesService.update(course)
    }
    else{
      this.coursesService.create(course)
    }
  }
}
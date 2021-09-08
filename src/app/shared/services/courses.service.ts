import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [
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

  all() {
    return this.courses
  }

  find(courseId) {

  }

  create(course) {
    console.log("Create Course", course)
  }

  update(course) {
    console.log("Update Course", course)
  }

  delete(courseId) {
    console.log("Delete Course", courseId)
  }
}

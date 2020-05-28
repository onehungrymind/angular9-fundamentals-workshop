import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals!!',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS!!',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId) {

  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('UDDATE COURSE', course);
  }

  delete(courseId) {
    console.log('DLETE COURSE', courseId);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  themeColor = "blue"
  title = "Hello Workshop !"
  currentLesson = null
  updateColor(){
    console.log(23)
    this.themeColor = "red"
  }
  courseLessons = null

  constructor(private lessonsServices: LessonsService) { }

  selectLesson(lesson) {
    this.currentLesson = lesson
    console.log("Selected Lesson: ", lesson.title)
  }

  ngOnInit(): void {
    this.courseLessons = this.lessonsServices.all()
  }
}

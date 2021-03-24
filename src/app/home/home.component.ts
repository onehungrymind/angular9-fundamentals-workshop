import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  themeColor = 'red'
  welcome = "hey there, welcome to angular."

  currentLesson = null;

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
    setInterval(() => {
      this.welcome = 'this is gone now.'
    }, 4000)


  }
  
  updateColor() {
    this.themeColor = 'green'
  }

  selectLesson(lesson){
    console.log('selectLesson() ', lesson)
    this.currentLesson = lesson
  }

}

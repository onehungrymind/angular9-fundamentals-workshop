import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('Hello Users');
  });

  it('should render the correct title', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello Users');
    component.title = 'HEY THERE!';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('HEY THERE!');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalwebComponent } from './personalweb.component';

describe('PersonalwebComponent', () => {
  let component: PersonalwebComponent;
  let fixture: ComponentFixture<PersonalwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

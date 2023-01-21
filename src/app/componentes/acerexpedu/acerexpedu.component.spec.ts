import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerexpeduComponent } from './acerexpedu.component';

describe('AcerexpeduComponent', () => {
  let component: AcerexpeduComponent;
  let fixture: ComponentFixture<AcerexpeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerexpeduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerexpeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

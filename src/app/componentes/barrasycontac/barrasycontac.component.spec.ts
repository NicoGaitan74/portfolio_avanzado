import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasycontacComponent } from './barrasycontac.component';

describe('BarrasycontacComponent', () => {
  let component: BarrasycontacComponent;
  let fixture: ComponentFixture<BarrasycontacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasycontacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasycontacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

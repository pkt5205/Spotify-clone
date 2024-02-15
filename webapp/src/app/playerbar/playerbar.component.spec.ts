import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerbarComponent } from './playerbar.component';

describe('PlayerbarComponent', () => {
  let component: PlayerbarComponent;
  let fixture: ComponentFixture<PlayerbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

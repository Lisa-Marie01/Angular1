import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaComponent } from './lisa.component';

describe('LisaComponent', () => {
  let component: LisaComponent;
  let fixture: ComponentFixture<LisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

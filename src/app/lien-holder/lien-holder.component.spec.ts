import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienHolderComponent } from './lien-holder.component';

describe('LienHolderComponent', () => {
  let component: LienHolderComponent;
  let fixture: ComponentFixture<LienHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

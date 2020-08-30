import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienHolderDetailComponent } from './lien-holder-detail.component';

describe('LienHolderDetailComponent', () => {
  let component: LienHolderDetailComponent;
  let fixture: ComponentFixture<LienHolderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienHolderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienHolderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

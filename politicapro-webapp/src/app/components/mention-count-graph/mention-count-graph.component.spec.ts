import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionCountGraphComponent } from './mention-count-graph.component';

describe('MentionCountGraphComponent', () => {
  let component: MentionCountGraphComponent;
  let fixture: ComponentFixture<MentionCountGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionCountGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

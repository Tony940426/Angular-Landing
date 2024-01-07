import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechArticleListComponent } from './tech-article-list.component';

describe('TechArticleListComponent', () => {
  let component: TechArticleListComponent;
  let fixture: ComponentFixture<TechArticleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechArticleListComponent]
    });
    fixture = TestBed.createComponent(TechArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedArticle } from './selected-article';

describe('SelectedArticle', () => {
  let component: SelectedArticle;
  let fixture: ComponentFixture<SelectedArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllRepositoriesComponent } from './list-all-repositories.component';

describe('ListAllRepositoriesComponent', () => {
  let component: ListAllRepositoriesComponent;
  let fixture: ComponentFixture<ListAllRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

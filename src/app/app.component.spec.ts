import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
         declarations: [AppComponent],
        imports: [
            RouterTestingModule.withRoutes([
            { path: '', redirectTo: 'login', pathMatch: 'full'}])
        ]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
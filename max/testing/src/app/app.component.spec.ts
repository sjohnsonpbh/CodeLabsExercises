import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// remember me - Configuring the testing environment
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // Test 1
  it('should create the app', () => {
    // Accessing the testing environment for the AppComponent - services, templates, etc
    const fixture = TestBed.createComponent(AppComponent);
    //  accessing component instance - properties or methods
    const app = fixture.componentInstance;
    // Requirement set
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // detect these changes
    fixture.detectChanges();
    // app component's template
    const compiled = fixture.nativeElement as HTMLElement;
    // check to see if title is in the template
    expect(compiled.querySelector('is Loggedin')?.textContent).toContain(
      'testing app is running!'
    );
  });
});

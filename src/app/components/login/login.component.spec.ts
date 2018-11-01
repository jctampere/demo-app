import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

describe('Login Component', () => {
    let comp: LoginComponent;
    let userService: UserService;
    let loginService: LoginService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//          providers: 
//          [LoginComponent,
//          {provide: LoginService}],
//         imports: [

//             RouterTestingModule.withRoutes([
//             { path: '', redirectTo: 'login', pathMatch: 'full'}])
//         ]});
//     comp = TestBed.get(LoginComponent);
//     userService = TestBed.get(UserService);
//     loginService = TestBed.get(LoginService);

//   });
  it ('', () => {
    comp = new LoginComponent(loginService, userService);
    expect(comp.hide).toBeUndefined();
    comp.ngOnInit();
    expect(comp.hide).toEqual(true);
  });
});
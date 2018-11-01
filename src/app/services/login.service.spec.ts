import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	let loginService: LoginService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
		loginService = new LoginService(httpClient);
	});

	it('should be created', () => {
		expect(loginService).toBeTruthy();
	});

	it('should login user with correct username and password', () => {
		const testData = {
			id: 'id',
			username: 'string',
			firstName: 'string',
			lastName: 'string',
			token: 'string',
		};
		loginService.login('testuser@gmail.com', 'test').subscribe(data => expect(data).toEqual(testData));
		const req = httpTestingController.expectOne('http://localhost:4000/login');
		expect(req.request.method).toEqual('POST');
        req.flush(testData);
    });
    afterEach(() => {
        httpTestingController.verify();
      });
});

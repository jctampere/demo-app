import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { UserData } from '../../subscriptions.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted: boolean;
    loading: boolean;
    hide: boolean;
    loginFailed: boolean
    subscriptionUrl: string;
    formBuilder: FormBuilder;
    router: Router;
    
    constructor(
        private loginService: LoginService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.submitted = false;
        this.loginFailed = false;
        this.loading = false;
        this.hide = true;
        this.createLoginForm();
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe((response: UserData) => {
                this.loading = false;
                this.userService.setCurrentUser(response);
                this.router.navigate(['/subscriptions']);
            }, error => {
                this.loading = false;
                this.loginFailed = true;
                this.loginForm.reset();
                console.log(error);
            })
      
    }
}
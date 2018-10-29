import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.submitted = false;
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

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        console.log('Login oK');
        this.loading = false;
    }
}
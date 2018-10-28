import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule,
         MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule,
         MatIconModule,
         MatTableModule,
         MatDividerModule,
         MatCardModule,
         MatButtonModule,
         MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

// import { IssueService } from './issue.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
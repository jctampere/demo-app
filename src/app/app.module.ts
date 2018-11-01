import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
         MatSnackBarModule,
         MatExpansionModule,
         MatPaginatorModule,
         MatSortModule,
          } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { TitleAreaComponent } from './components/title-area/title-area.component';
import { SubscriptionsTableComponent } from './components/subscriptions-table/subscriptions-table.component';

import { LoginService } from './services/login.service';
import { SubscriptionService } from './services/subscription.service';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionsComponent,
    TitleAreaComponent,
    SubscriptionsTableComponent
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
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  providers: [LoginService, SubscriptionService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule {}
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatSortable } from '@angular/material';

import { UserSubscriptionItem, UserSubscriptions } from '../../subscriptions.model';
import { SubscriptionService } from '../../services/subscription.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.css']
  })

export class SubscriptionsComponent implements OnInit{
    userSubscriptions: UserSubscriptions;
    userSubscriptionItem: UserSubscriptionItem;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['name', 'activationDate', 'price', 'details'];
    dataSource: MatTableDataSource<UserSubscriptionItem>;
    router: Router;

    constructor(private subscriptionService: SubscriptionService, private userService: UserService) {}

    ngOnInit() {
        if (this.userService.getCurrentUser) {
            this.fetchUserSubscriptions();
        } else {
            this.logoutUser();
        }
        
    }

    fetchUserSubscriptions () {
       return this.subscriptionService.getSubscriptions()
            .subscribe((response: UserSubscriptions) => {
                this.userSubscriptions = response;
                this.dataSource = new MatTableDataSource<UserSubscriptionItem>(this.userSubscriptions.subscriptions);
                this.dataSource.sort = this.sort;
                // this.sort.sort(<MatSortable>{
                //     id: 'price',
                //     start: 'desc'
                // });
            this.dataSource.paginator = this.paginator;
            }, 
            error => console.log(error));
    }

    logoutUser() {
        this.router.navigate(['/login']);
        this.userService.removeUser();
    }

    applyFilter(filterValue: string) {
        console.log(this.dataSource);
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
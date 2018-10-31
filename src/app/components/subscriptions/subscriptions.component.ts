import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatSortable } from '@angular/material';

import { UserSubscriptionItem, UserSubscriptions } from '../../subscriptions.model';
import { SubscriptionService } from '../../services/subscription.service';

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

    constructor(private subscriptionService: SubscriptionService) {}

    ngOnInit() {
        this.fetchUserSubscriptions();
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

    applyFilter(filterValue: string) {
        console.log(this.dataSource);
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
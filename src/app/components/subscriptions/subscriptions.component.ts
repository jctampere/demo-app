import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatSortable } from '@angular/material';

import { UserSubscriptionItem, UserSubscriptions } from '../../subscriptions.model';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.css']
  })

export class SubscriptionsComponent {
    userSubscriptions: UserSubscriptions;
    userSubscriptionItem: UserSubscriptionItem;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['name', 'activationDate', 'price', 'details'];
    dataSource: MatTableDataSource<UserSubscriptionItem>;

    constructor() {}

    ngOnInit() {}

    fetchUserSubscriptions () {
        return {
            
        }
    }
}
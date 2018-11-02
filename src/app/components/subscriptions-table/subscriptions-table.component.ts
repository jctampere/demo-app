import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatSortable, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserSubscriptionItem } from '../../subscriptions.model';
import { SubscriptionDetailsDialog } from '../subscription-detail/subscription-detail.component';

@Component({
	selector: 'subscriptions-table',
	templateUrl: './subscriptions-table.component.html',
	styleUrls: ['./subscriptions-table.component.css'],
})
export class SubscriptionsTableComponent implements OnInit{
	@Input()
	title: string;
	@Input()
	subscriptionItems: UserSubscriptionItem[];

	itemsNumber: number;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	displayedColumns = ['name', 'activationDate', 'sortPrice', 'details'];
	dataSource: MatTableDataSource<UserSubscriptionItem>;

	constructor(private dialog: MatDialog) {}
    

	ngOnInit() {
			this.itemsNumber = this.subscriptionItems.length;
			this.dataSource = new MatTableDataSource<UserSubscriptionItem>(this.subscriptionItems);   
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(this.sort);
        // this.sort.sort (<MatSortable>{
        //     id: 'sortPrice',
        //     start: 'desc'
        // });
       
    }

    openDetailsDialog(data: UserSubscriptionItem) {
        const dialogRef = this.dialog.open(SubscriptionDetailsDialog, {
            width: '80%',
            data: data
        });
    }
	//for searching
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}

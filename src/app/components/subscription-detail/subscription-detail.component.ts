import { Component, Inject } from '@angular/core';

import { UserSubscriptionItem } from '../../subscriptions.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.css']
})
export class SubscriptionDetailsDialog {
  objectKeys = Object.keys;

  constructor(public dialogRef: MatDialogRef<SubscriptionDetailsDialog>,
     @Inject(MAT_DIALOG_DATA) public subscriptionItem: UserSubscriptionItem) {}

  close() {
    this.dialogRef.close();
  }
}
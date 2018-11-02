import { Component, Inject } from '@angular/core';

import { UserSubscriptionItem } from '../../subscriptions.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.css']
})
export class SubscriptionDetailsDialog {

  constructor(private dialogRef: MatDialogRef<SubscriptionDetailsDialog>,
     @Inject(MAT_DIALOG_DATA) private data: UserSubscriptionItem) {}

  close() {
    this.dialogRef.close();
  }
}
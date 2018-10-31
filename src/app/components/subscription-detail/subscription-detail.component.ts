import { Component, Input } from '@angular/core';

import { UserSubscriptionItem } from '../../subscriptions.model';


@Component({
  selector: 'subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.css']
})
export class AppComponent {
  @Input() subscriptionDetail: UserSubscriptionItem;

  constructor() {}
}
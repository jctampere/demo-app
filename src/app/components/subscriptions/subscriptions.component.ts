import { Component, OnInit } from '@angular/core';

import { UserSubscriptions, UserSubscriptionItem } from '../../subscriptions.model';
import { SubscriptionService } from '../../services/subscription.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-subscriptions',
	templateUrl: './subscriptions.component.html',
	styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit {
	userSubscriptions: UserSubscriptions;
    show: boolean;
    user: any;
    mobileSubscriptions: UserSubscriptionItem[];
    broadbandSubscriptions: UserSubscriptionItem[];

	constructor(private subscriptionService: SubscriptionService, private userService: UserService, private router: Router) {}

	ngOnInit() {
		if (this.userService.getCurrentUser()) {
            this.user = this.userService.getCurrentUser();
			this.fetchUserSubscriptions();
		} else {
			this.logoutUser();
		}
	}

	fetchUserSubscriptions() {
		return this.subscriptionService.getSubscriptions().subscribe(
			(response: UserSubscriptions) => {
                this.userSubscriptions = response;
                this.mobileSubscriptions = this.userSubscriptions.subscriptions.mobile;
                this.broadbandSubscriptions = this.userSubscriptions.subscriptions.broadband;
				this.show = true;
			},
			error => {
				console.log(error);
				this.show = false;
			}
		);
	}

	logoutUser() {
        this.userService.removeUser();
		this.router.navigate(['/login']);
		
	}
}

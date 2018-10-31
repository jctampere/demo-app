export interface SubscriptionDetails {
    name: string;
    sortPrice: number;
} 

export interface UserSubscriptionItem {
    username: string;
    mobile: string;
    address: string;
    activatedince: Date;
    activatedEnd: Date;
    element: SubscriptionDetails;
}

export interface UserSubscriptions {
    loginName: string;
    subscriptions: UserSubscriptionItem[];
}

export interface UserData {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
}
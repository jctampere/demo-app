export interface SubscriptionDetails {
    name: String;
    price: number;
} 

export interface UserSubscriptionItem {
    username: String;
    mobile: String;
    address: String;
    activationDate: Date;
    deactivationDate: Date;
    details: SubscriptionDetails;
}

export interface UserSubscriptions {
    loginName: String;
    subscriptions: UserSubscriptionItem[];
}
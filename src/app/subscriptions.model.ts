export interface SubscriptionDetails {
    name: string;
    sortPrice: number;
} 

export interface UserSubscriptionItem {
    username: string;
    mobile?: string;
    address?: string;
    activatedince: string;
    activatedEnd: string;
    name: string;
    sortPrice: string;
    subscriptionType: string;
    details: Object;
}

export interface UserSubscriptions {
    loginName: string;
    subscriptions: {
        mobile: UserSubscriptionItem[],
        broadband: UserSubscriptionItem[]
    };
}

export interface UserData {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
}
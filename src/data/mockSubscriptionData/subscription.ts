
export interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    features: string[];
    isActive: boolean;
    expiresAt: string;
}

export const mockSubscriptionData: SubscriptionPlan = {
    id: 'premium-plan',
    name: 'Premium Plan',
    price: 29.99,
    features: ['Unlimited Job Application', 'Advanced Job Matching', 'Priority support', 'Profile highlighting'],
    isActive: false,
    expiresAt: '2025-12-31T23:59:59Z'
};

export const mockSubscriptionApi = {
    getPlan: () => {
        return new Promise<{ data: SubscriptionPlan }>((resolve) => {
            //Simulate API delay
            setTimeout(() => {
                resolve({ data: mockSubscriptionData });
            }, 800);
        })
    },


    verify: () => {
        return new Promise<{ isSubscribed: boolean }>((resolve) => {
            setTimeout(() => {
                resolve({ isSubscribed: mockSubscriptionData.isActive })
            }, 500)
        })
    },
}
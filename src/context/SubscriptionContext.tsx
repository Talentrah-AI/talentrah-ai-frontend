'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { mockSubscriptionApi, type SubscriptionPlan } from '@/data/mockSubscriptionData/subscription';

interface SubscriptionContextType {
  isPremium: boolean;
  subscriptionData: SubscriptionPlan | null;
  loading: boolean;
  error: Error | null;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(
  undefined
);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      'useSubscription must be used within a SubscriptionProvider'
    );
  }
  return context;
};

export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<SubscriptionContextType>({
    isPremium: false,
    subscriptionData: null,
    loading: true,
    error: null,
  });



  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const { data } = await mockSubscriptionApi.getPlan();
        setState({
          isPremium: data.isActive,
          subscriptionData: data,
          loading: false,
          error: null
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: error as Error
        }));
      }
    };
    fetchSubscription();
  }, []);


  return (
    <SubscriptionContext.Provider value={state}>
      {children}
    </SubscriptionContext.Provider>
  );
};

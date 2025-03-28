'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '@/lib/api';

interface SubscriptionContextType {
  isPremium: boolean;
  setIsPremium: (value: boolean) => void;
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
  const [isPremium, setIsPremium] = useState(false);

  // Fetch subscription status
  const { data } = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const response = await endpoints.subscription.getPlan();
      return response.data;
    },
  });

  // Ensure state updates when query data changes
  useEffect(() => {
    if (data?.isPremium !== undefined) {
      setIsPremium(data.isPremium);
    }
  }, [data]);
  return (
    <SubscriptionContext.Provider value={{ isPremium, setIsPremium }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

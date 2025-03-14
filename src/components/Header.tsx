'use client';

import { Bell, ChevronDown, Globe, Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '@/lib/api';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Image from 'next/image';
interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const queryClient = useQueryClient();

  // Fetch notifications
  const { data: notifications = [], isLoading: isLoadingNotifications } =
    useQuery<Notification[]>({
      queryKey: ['notifications'],
      queryFn: async () => {
        const response = await endpoints.notifications.list();
        return response.data;
      },
    });

  // Fetch user's current language
  const { data: userProfile } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const response = await endpoints.user.getProfile();
      return response.data;
    },
  });

  // Fetch subscription status
  const { data: subscription } = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const response = await endpoints.subscription.getPlan();
      return response.data;
    },
  });

  // Mark notification as read
  const markAsReadMutation = useMutation({
    mutationFn: (notificationId: string) =>
      endpoints.notifications.markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  // Mark all notifications as read
  const markAllAsReadMutation = useMutation({
    mutationFn: () => endpoints.notifications.markAllAsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      toast.success('All notifications marked as read');
    },
  });

  // Update language preference
  const updateLanguageMutation = useMutation({
    mutationFn: (language: string) => endpoints.user.updateLanguage(language),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
      toast.success('Language updated successfully');
    },
  });

  const unreadCount = notifications.filter((n) => !n.read).length;
  const currentLanguage =
    languages.find((lang) => lang.code === userProfile?.language) ||
    languages[0];

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.read) {
      markAsReadMutation.mutate(notification.id);
    }
  };

  const handleLanguageChange = (language: Language) => {
    updateLanguageMutation.mutate(language.code);
  };

  const handleUpgradeClick = async () => {
    try {
      // Implement your upgrade flow here
      toast.success('Redirecting to upgrade page...');
    } catch (error) {
      toast.error('Failed to process upgrade request');
      console.error(error);
    }
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-start bg-white border-opacity-50 w-full h-[64px] pl-4 pr-6 pt-4 pb-4 gap-2 border-b border-[#EFF0F2]">
      <div className="h-[32px] w-[1142px] flex items-center gap-4 justify-between">
        <div className="flex"></div>
        <div className="flex items-start gap-4 w-[540px] justify-between">
          {/* Create Job Loop Button */}
          <Button
            className="h-[32px] px-[12px] py-[8px] 
           rounded-[12px] bg-[#0967D2] hover:bg-[#0967D2]
           shadow-[0px_4px_15px_rgba(41,45,50,0.05)] 
            cursor-pointer"
          >
            <Plus className="h-[16px] w-[16px] text-white" />
            <span className="font-gabarito font-normal text-[12px] leading-[16px] tracking-[0px] text-white">
              Create job loop
            </span>
          </Button>

          {/* Notifications */}
          <Sheet
            open={isNotificationsOpen}
            onOpenChange={setIsNotificationsOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative w-8 h-8 gap-2 rounded-full p-2 bg-white drop-shadow-xs"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-red-500"
                    variant="secondary"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <SheetTitle>Notifications</SheetTitle>
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => markAllAsReadMutation.mutate()}
                      disabled={markAllAsReadMutation.isLoading}
                    >
                      Mark all as read
                    </Button>
                  )}
                </div>
              </SheetHeader>
              <div className="mt-4 space-y-2">
                {isLoadingNotifications ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                  </div>
                ) : notifications.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">
                    No notifications yet
                  </p>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        !notification.read
                          ? 'bg-blue-50 hover:bg-blue-100'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <h4 className="font-medium">{notification.title}</h4>
                      <p className="text-sm text-gray-600">
                        {notification.message}
                      </p>
                      <time className="text-xs text-gray-500">
                        {new Date(notification.timestamp).toLocaleString()}
                      </time>
                    </div>
                  ))
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex items-center w-[98px] h-[32px] px-[12px] py-[8px] gap-[10px] rounded-[12px] bg-[#FFFFFF] shadow-[0px_4px_15px_0px_#292D320D]"
              >
                <Globe className="h-[16px] w-[16px] text-[#717A84]" />
                <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#414A53]">
                  {currentLanguage.name}
                </span>
                <ChevronDown className="h-[12px] w-[12px] text-[#B0B5BB]" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className="flex items-center gap-2"
                  disabled={updateLanguageMutation.isLoading}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLanguage.code === language.code && (
                    <span className="ml-auto">✓</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Upgrade to Premium */}
          <Button
            variant="outline"
            className="w-[149.739px] h-[32px] px-[12px] py-[8px] gap-[10px] rounded-[12px] border-[#07A2A8] border-[0.5px]"
            onClick={handleUpgradeClick}
            disabled={subscription?.isPremium}
          >
            <Image
              src="/Layer_2.svg"
              alt="Premium Member"
              width={13}
              height={16}
            />
            {subscription?.isPremium ? (
              <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#07A2A8]">
                Premium Member
              </span>
            ) : (
              <span className="font-[Gabarito] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#07A2A8]">
                Upgrade to premium
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

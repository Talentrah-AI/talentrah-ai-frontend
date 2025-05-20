import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell, ChevronDown, Globe, Menu } from 'lucide-react'
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react'


type HaederProp =
{
setSidebarOpen:Dispatch<SetStateAction<boolean>>
}
const HeaderPolygon = ({
  setSidebarOpen
}:HaederProp ) => {
  return (
    <div className="min-h-[70px] px-7 py-4 bg-white shadow-md flex justify-end items-center gap-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(true)}
        className="md:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="hidden md:block ">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 border-l pl-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1746013328/0af11f9514742e5552359e9fb526151cb0b932f3_anu5fr.png"
                      alt="User"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden flex-col items-start text-sm md:flex">
                    <span className="font-medium">Samuel Fenner</span>
                    <span className="text-xs text-gray-500">SUPER ADMIN</span>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default HeaderPolygon
import { BriefcaseBusiness, LayoutGrid, MessageCircleQuestion, Phone, Settings, ShieldUser, UsersRound } from "lucide-react"
import { JSX } from "react"

interface NavItem
{
    label: string,
    icon: JSX.Element,
    href:string,
}

export const NavItemList: NavItem[] = [
  {
    label: 'overview',
    icon: <LayoutGrid size={16} />,
    href: '/polygon-dashboard',
  },
  {
    label: 'candidates',
    icon: <UsersRound size={16} />,
    href: '/polygon-dashboard',
  },
  {
    label: 'job management',
    icon: <BriefcaseBusiness size={16} />,
    href: '/polygon-dashboard',
  },
  {
    label: 'mentorship request',
    icon: <Phone size={16} />,
    href: '/polygon-dashboard',
  },
  {
    label: 'mentors manangement',
    icon: <UsersRound size={16} />,
    href: '/polygon-dashboard',
  },
  {
    label: 'admin management',
    icon: <ShieldUser size={16} />,
    href: '/Admin-management',
  },
  {
    label: 'feedbacks management',
    icon: <MessageCircleQuestion size={16} />,
    href: '/feedbacks-management',
  },
  {
    label: 'settings',
    icon: <Settings size={16} />,
    href: '/polygon-dashboard',
  },
];
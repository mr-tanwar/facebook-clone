import React from 'react';

import {
  Bell,
  CircleUserRound,
  Gamepad2,
  House,
  LayoutGrid,
  MessageCirclePlus,
  Store,
  TvMinimalPlay,
} from 'lucide-react';

import FacebookIcon from '@/components/icons/FacebookIcon';
import SearchBar from '@/components/shared/SearchBar';

import ActionButton from './ActionButton';
import NavItem from './NavItem';

interface User {
  name: string;
  avatarUrl: string;
}

interface HeaderProps {
  user?: User;
  activePath?: string;
}

const baseIconStyles = { size: 28 };
const navItems = [
  { href: '/', icon: <House {...baseIconStyles} />, 'aria-label': 'Home' },
  {
    href: '/watch',
    icon: <TvMinimalPlay {...baseIconStyles} />,
    'aria-label': 'Watch',
  },
  {
    href: '/marketplace',
    icon: <Store {...baseIconStyles} />,
    'aria-label': 'Marketplace',
  },
  {
    href: '/groups',
    icon: <CircleUserRound {...baseIconStyles} />,
    'aria-label': 'Groups',
  },
  {
    href: '/gaming',
    icon: <Gamepad2 {...baseIconStyles} />,
    'aria-label': 'Gaming',
  },
];

const actionItems = [
  { id: 1, icon: <LayoutGrid />, 'aria-label': 'Menu' },
  { id: 2, icon: <MessageCirclePlus />, 'aria-label': 'Messenger' },
  { id: 3, icon: <Bell />, 'aria-label': 'Notifications' },
];

const Header = ({
  user = {
    avatarUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb',
    name: '',
  },
  activePath = '/',
}: HeaderProps) => {
  return (
    <header className="flex h-14 w-full items-center justify-between bg-card px-4 shadow-md">
      <div className="flex items-center gap-2">
        <FacebookIcon className="text-blue-600" />
        <SearchBar />
      </div>

      <nav className="flex h-full items-center justify-center">
        <ul className="flex h-full items-center">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              isActive={activePath === item.href}
              aria-label={item['aria-label']}
            >
              {item.icon}
            </NavItem>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        {actionItems.map((item) => (
          <ActionButton key={item.id} aria-label={item['aria-label']}>
            {item.icon}
          </ActionButton>
        ))}

        <button aria-label="Account controls">
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s profile`}
            className="h-10 w-10 rounded-full"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

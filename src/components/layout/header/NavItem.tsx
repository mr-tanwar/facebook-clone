import React from 'react';

import Link from 'next/link';

interface NavItemProps {
  href: string;
  isActive: boolean;
  'aria-label': string;
  children: React.ReactNode;
}

const NavItem = ({
  href,
  isActive,
  'aria-label': ariaLabel,
  children,
}: NavItemProps) => {
  const activeClasses = 'border-b-4 border-blue-600 text-blue-600';
  const inactiveClasses =
    'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg';

  return (
    <li className="h-full">
      <Link
        href={href}
        aria-label={ariaLabel}
        className={`flex h-full w-24 items-center justify-center transition-colors duration-200 ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;

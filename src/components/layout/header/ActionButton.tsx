import React from 'react';

interface ActionButtonProps {
  'aria-label': string;
  children: React.ReactNode;
}

const ActionButton = ({
  'aria-label': ariaLabel,
  children,
}: ActionButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black hover:bg-gray-300"
    >
      {children}
    </button>
  );
};

export default ActionButton;

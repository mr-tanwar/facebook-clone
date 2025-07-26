import React from 'react';

import Header from '@/components/layout/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

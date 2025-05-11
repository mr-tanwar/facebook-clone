import React from 'react';

import { MainLayout } from '@/layouts';

const HomePage = () => {
  return <div>HomePage</div>;
};

HomePage.getLayout = (page: React.ReactElement) => {
  return <MainLayout> {page} </MainLayout>;
};
export default HomePage;

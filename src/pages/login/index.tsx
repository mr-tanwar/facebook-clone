import React from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginContainer from '@/features/auth/container/login/LoginContainer';

const LoginPage = () => {
  return <LoginContainer />;
};

export default LoginPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  };
}

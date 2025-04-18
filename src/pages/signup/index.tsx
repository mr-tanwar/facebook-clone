import React from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SignupContainer from '@/features/auth/container/signup/SignupContainer';

const SignUpPage = () => {
  return <SignupContainer />;
};

export default SignUpPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  };
}

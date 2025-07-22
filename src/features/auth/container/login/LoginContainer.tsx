import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

import LoginForm from '../../component/loginForm/LoginForm';

function LoginContainer() {
  const { t } = useTranslation('auth');
  const router = useRouter();
  const signUpHandler = () => {
    router.push('/signup');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div
        className={
          'grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2'
        }
      >
        <div className={'mb-4 text-center md:text-left'}>
          <Image
            src="/facebook_text_logo.svg"
            alt="fb logo"
            width={320}
            height={106}
            className="mx-auto md:mx-0"
          />

          <h2 className={'text-black-700 text-xl'}>{t('loginDescription')}</h2>
        </div>
        <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
          <LoginForm signUpHandler={signUpHandler} />
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;

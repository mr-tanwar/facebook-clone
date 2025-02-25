import React from 'react';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import LoginForm from '../../component/loginForm/LoginForm';

import styles from './styles.module.css';

const LoginContainer = () => {
  const { t } = useTranslation('auth');
  return (
    <div className="container">
      <div className={`gutter-lg grid ${styles.wrapper}`}>
        <div className={`col-4 col-sm-12 ${styles.logoContainer} `}>
          <div className={styles.logoContainer}>
            <Image
              src="/facebook_text_logo.svg"
              alt="fb logo"
              width={320}
              height={106}
            />
          </div>

          <h2 className={styles.header}>{t('loginDescription')}</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;

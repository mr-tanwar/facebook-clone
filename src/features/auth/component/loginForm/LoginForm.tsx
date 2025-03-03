import React from 'react';

import { useTranslation } from 'next-i18next';

import { Button, InputField, Divider } from '@/components/ui';
import { BUTTON_VARIANTS } from '@/components/ui/button';

import styles from './style.module.scss';

const LoginForm = () => {
  const { t } = useTranslation('auth');
  return (
    <div className={`col-4 ${styles.formContainer} `}>
      <div className={styles.form}>
        <InputField
          type="text"
          placeholder={t('emailPhoneNumber')}
          handleChange={() => {}}
        />
        <InputField
          type="password"
          placeholder={t('password')}
          handleChange={() => {}}
        />
        <Button onClick={() => {}}> {t('login')} </Button>
        <Button onClick={() => {}} variant={BUTTON_VARIANTS.LINK}>
          {t('forgotPassword')}
        </Button>
        <Divider />
        <div className={styles.buttonContainer}>
          <Button onClick={() => {}} variant={BUTTON_VARIANTS.SECONDARY}>
            {t('createNewAccount')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

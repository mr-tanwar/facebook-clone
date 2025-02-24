import React from 'react';

import { Button, InputField, Divider } from '@/components/ui';
import { BUTTON_VARIANTS } from '@/components/ui/button';

import styles from './style.module.css';

const LoginForm = () => {
  return (
    <div className={`col-4 ${styles.formContainer} `}>
      <div className={styles.form}>
        <InputField
          type="text"
          placeholder="Email address or phone number"
          handleChange={() => {}}
        />
        <InputField
          type="password"
          placeholder="Password"
          handleChange={() => {}}
        />
        <Button onClick={() => {}}>Log in</Button>
        <Button onClick={() => {}} variant={BUTTON_VARIANTS.LINK}>
          Forgotten password?{' '}
        </Button>
        <Divider />
        <div className={styles.buttonContainer}>
          <Button onClick={() => {}} variant={BUTTON_VARIANTS.SECONDARY}>
            Create new account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

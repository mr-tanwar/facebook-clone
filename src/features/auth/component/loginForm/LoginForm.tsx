import React from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Divider, InputField } from '@/components/ui';

import styles from './styles.module.css';
import { LoginFormProps } from './types';

import { REGEX } from '@/utils';
import { Button } from '@/components/ui/button';

interface FormProps {
  email: string;
  password: string;
}

const defaultValues: FormProps = {
  email: '',
  password: '',
};

const LoginForm: React.FC<LoginFormProps> = ({ signUpHandler }) => {
  const { t } = useTranslation('auth');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues,
    mode: 'onSubmit',
  });

  const onSubmitHandler: SubmitHandler<FormProps> = (data) => {
    // eslint-disable-next-line
    console.log('form data', data);
  };

  return (
    <div className={clsx('col-4', styles.formContainer)}>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <div className={styles.form}>
          <div>
            <InputField
              type="email"
              placeholder={t('emailPhoneNumber')}
              {...register('email', {
                required: t('emailRequiredErr'),
                pattern: {
                  value: REGEX.EMAIL,
                  message: t('invalidEmailErr'),
                },
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <InputField
              type="password"
              placeholder={t('password')}
              {...register('password', {
                required: t('passwordRequiredErr'),
                minLength: {
                  value: 6,
                  message: t('passwordMinLengthErr'),
                },
                pattern: {
                  value: REGEX.PASSWORD,
                  message: t('passwordErr'),
                },
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>

          <Button onClick={() => {}} variant="destructive">
            {' '}
            {t('login')}{' '}
          </Button>
          <Button onClick={() => {}} variant={'secondary'}>
            {t('forgotPassword')}
          </Button>
          <Divider />
          <div className={styles.buttonContainer}>
            <Button onClick={signUpHandler}>{t('createNewAccount')}</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

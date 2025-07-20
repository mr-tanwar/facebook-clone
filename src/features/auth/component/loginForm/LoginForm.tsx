import React from 'react';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Divider, InputField } from '@/components/ui';

import { LoginFormProps } from './types';

import { REGEX } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <div className={''}>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <div>
          <Input
            type="email"
            placeholder={t('emailPhoneNumber')}
            {...register('email', {
              required: t('emailRequiredErr'),
              pattern: {
                value: REGEX.EMAIL,
                message: t('invalidEmailErr'),
              },
            })}
            className="mb-4 pb-8 pt-8 md:text-lg"
          />
          {errors.email && <p className={''}>{errors.email.message}</p>}
        </div>
        <div>
          <Input
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
            className="mb-4 pb-8 pt-8 font-medium md:text-lg"
          />
          {errors.password && <p className={''}>{errors.password.message}</p>}
        </div>

        <Button
          onClick={() => {}}
          className="mb-4 w-full p-6 text-lg font-medium"
        >
          {' '}
          {t('login')}{' '}
        </Button>
        <Button
          onClick={() => {}}
          variant={'link'}
          className="w-full justify-center text-center font-medium"
        >
          {t('forgotPassword')}
        </Button>
        <Divider />
        <div className="w-full text-center">
          <Button
            onClick={signUpHandler}
            className="mt-8 bg-green-600 p-6 text-lg font-medium"
          >
            {t('createNewAccount')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { CircleHelpIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/ui/button/Button';
import { BUTTON_VARIANTS } from '@/components/ui/button/enum';
import FormField from '@/components/ui/formField';

import { DAYS, MONTHS, YEARS } from './constants';
import styles from './styles.module.scss';

const SignupForm: React.FC = () => {
  const { t } = useTranslation('auth');

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('firstNameRequired')),
    surName: Yup.string().required(t('surNameRequired')),
    email: Yup.string()
      .email(t('invalidEmailErr'))
      .required(t('emailRequiredErr')),
    password: Yup.string()
      .min(6, t('passwordMinLengthErr'))
      .required(t('passwordRequiredErr')),
    gender: Yup.string().required(t('genderRequiredErr')),
    day: Yup.string().required(t('dayRequiredErr')),
    month: Yup.string().required(t('monthRequiredErr')),
    year: Yup.string().required(t('yearRequiredErr')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    // eslint-disable-next-line
    console.log('Form Data:', data);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headingContainer}>
        <h3 className={styles.title}>{t('createANewAccount')}</h3>
        <span className={styles.subTitle}>{t('quickAndEasy')}</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.name}>
          <FormField
            placeholder={t('firstName')}
            error={errors.firstName?.message}
            name="firstName"
            register={register}
            inputStyle={styles.input}
          />

          <FormField
            placeholder={t('surName')}
            error={errors.surName?.message}
            name="surName"
            register={register}
            inputStyle={styles.input}
          />
        </div>
        <div>
          <span className={styles.dob}>
            {t('dob')}
            <CircleHelpIcon fill="#606770" size={16} color="white" />
          </span>
          <div className={styles.dobSelector}>
            <FormField
              type="select"
              options={DAYS}
              name="day"
              register={register}
              formStyle={styles.dobInput}
            />

            <FormField
              type="select"
              options={MONTHS}
              name="month"
              register={register}
              formStyle={styles.dobInput}
            />
            <FormField
              type="select"
              options={YEARS}
              name="year"
              register={register}
              formStyle={styles.dobInput}
            />
          </div>
        </div>
        <div>
          <span className={styles.dob}>
            {t('gender')}
            <CircleHelpIcon fill="#606770" size={16} color="white" />
          </span>
          <div className={styles.genderContainer}>
            <FormField
              label={t('female')}
              type="radio"
              name="gender"
              value="female"
              register={register}
              formStyle={styles.gender}
              inputStyle={styles.input}
              labelStyle={styles.genderLabel}
            />
            <FormField
              label={t('male')}
              type="radio"
              name="gender"
              value="male"
              register={register}
              formStyle={styles.gender}
              inputStyle={styles.input}
              labelStyle={styles.genderLabel}
            />
            <FormField
              label={t('custom')}
              type="radio"
              name="gender"
              value="custom"
              formStyle={styles.gender}
              register={register}
              inputStyle={styles.input}
              labelStyle={styles.genderLabel}
            />
          </div>
        </div>

        <FormField
          type="text"
          register={register}
          name="email"
          placeholder={t('mobileOrEmail')}
          error={errors.email?.message}
          inputStyle={styles.input}
        />

        <FormField
          type="password"
          name="password"
          register={register}
          placeholder={t('newPassword')}
          error={errors.password?.message}
          inputStyle={styles.input}
        />

        <p className={styles.paragraph}>
          {t('infoText')}
          <Link
            className={styles.link}
            href="https://www.facebook.com/help/637205020878504"
            target="_blank"
          >
            {t('learnMore')}
          </Link>
        </p>
        <p className={styles.paragraph}>
          {t('tncText')}
          <Link
            className={styles.link}
            href={'https://www.facebook.com/help/637205020878504'}
            target="_blank"
          >
            {t('terms')}
          </Link>
          <Link
            className={styles.link}
            href={'https://www.facebook.com/help/637205020878504'}
            target="_blank"
          >
            {t('privacyPolicy')}
          </Link>
          {t('and')}
          <Link
            className={styles.link}
            href={'https://www.facebook.com/help/637205020878504'}
            target="_blank"
          >
            {' '}
            {t('cookies')}
          </Link>
          {t('smsText')}
        </p>
        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            variant={BUTTON_VARIANTS.SECONDARY}
            inputStyle={styles.cta}
          >
            {t('signUp')}
          </Button>
        </div>

        <Button variant={BUTTON_VARIANTS.LINK} inputStyle={styles.accountBtn}>
          {t('alreadyAccount')}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;

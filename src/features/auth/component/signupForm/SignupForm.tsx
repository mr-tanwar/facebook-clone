import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { CircleHelpIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { DOB_OPTIONS, GENDER } from './constants';

const SignupForm: React.FC = () => {
  const { t } = useTranslation('auth');

  const validationSchema = Yup.object({
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

  const form = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    // eslint-disable-next-line
    console.log('Form Data:', data);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">{t('createANewAccount')}</h1>
        <p className="text-sm text-muted-foreground">{t('quickAndEasy')}</p>
      </div>
      <Divider />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-6"
        >
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t('firstName')}
                      {...field}
                      className="py-5"
                    />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t('surName')}
                      {...field}
                      className="py-5"
                    />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormLabel className="mb-1 flex items-center gap-1 text-sm font-medium">
              {t('dob')}
              <CircleHelpIcon fill="#606770" size={16} color="white" />
            </FormLabel>
            <div className="flex gap-4">
              {DOB_OPTIONS.map(({ name, items }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="w-[180px]">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t(name)} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {items.map((item) => (
                            <SelectItem key={item} value={String(item)}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1 flex items-center gap-1 text-sm font-medium">
                  {t('gender')}
                  <CircleHelpIcon fill="#606770" size={16} color="white" />
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    {GENDER.map((value) => (
                      <div
                        key={value}
                        className="flex flex-1 items-center justify-between rounded-md p-4 outline outline-1 outline-gray-200"
                      >
                        <Label htmlFor={value} className="pr-8">
                          {t(value)}
                        </Label>
                        <RadioGroupItem value={value} id={value} />
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('mobileOrEmail')}
                    {...field}
                    className="py-6"
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t('newPassword')}
                    {...field}
                    className="py-6"
                  />
                </FormControl>
                <FormMessage className="text-left" />
              </FormItem>
            )}
          />

          <p className="text-left text-sm text-gray-600">
            {t('infoText')}{' '}
            <Link
              href="https://www.facebook.com/help/637205020878504"
              target="_blank"
              className="text-blue-500"
            >
              {t('learnMore')}
            </Link>
          </p>

          <p className="text-left text-sm text-gray-600">
            {t('tncText')}{' '}
            <Link
              href="https://www.facebook.com/help/637205020878504"
              target="_blank"
            >
              {t('terms')}
            </Link>
            <Link
              href="https://www.facebook.com/help/637205020878504"
              target="_blank"
              className="text-blue-500"
            >
              {t('privacyPolicy')}
            </Link>
            {t('and')}
            <Link
              href="https://www.facebook.com/help/637205020878504"
              target="_blank"
              className="text-blue-500"
            >
              {t('cookies')}
            </Link>
            {t('smsText')}
          </p>

          <div className="text-center">
            <Button type="submit" className="min-w-60 bg-green-700">
              {t('signUp')}
            </Button>
          </div>

          <Button variant="link" className="mx-auto">
            {t('alreadyAccount')}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;

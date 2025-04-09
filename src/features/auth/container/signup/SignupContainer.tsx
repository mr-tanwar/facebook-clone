import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import SignupForm from '../../component/signupForm/SignupForm';

import styles from './styles.module.scss';

function SignupContainer() {
  return (
    <div className={clsx('container', styles.container)}>
      <div className="gutter-lg grid">
        <div className={styles.wrapper}>
          <Image
            src="/facebook_text_logo.svg"
            alt="fb logo"
            width={300}
            height={100}
          />
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;

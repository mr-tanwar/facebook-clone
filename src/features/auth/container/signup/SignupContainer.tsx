import React from 'react';

import Image from 'next/image';

import SignupForm from '../../component/signupForm/SignupForm';

function SignupContainer() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-md flex-col items-center">
        <Image
          src="/facebook_text_logo.svg"
          alt="fb logo"
          width={300}
          height={100}
        />
        <div className="mb-20 w-full rounded-lg bg-white text-center shadow-md">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;

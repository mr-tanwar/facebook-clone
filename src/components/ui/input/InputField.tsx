import React from 'react';

import { clsx } from 'clsx';

import styles from './styles.module.scss';
import { InputFieldProps } from './type';

const InputField = ({
  dynamicCls,
  placeholder,
  type = 'text',
  id = '',
  name = '',
  value = '',
  ...props
}: InputFieldProps) => {
  const className = clsx(styles.input, dynamicCls);

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      {...props}
    />
  );
};

export default InputField;

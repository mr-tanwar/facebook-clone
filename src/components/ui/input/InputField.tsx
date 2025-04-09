import React from 'react';

import { clsx } from 'clsx';

import { InputFieldProps } from './type';

import styles from './styles.module.css';

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

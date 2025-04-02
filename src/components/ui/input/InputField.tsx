import React from 'react';

import { InputFieldProps } from './type';

import styles from './styles.module.css';

const InputField = ({
  placeholder,
  type = 'text',
  ...props
}: InputFieldProps) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputField;

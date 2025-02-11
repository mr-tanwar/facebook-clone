import React from 'react';

import { InputFieldProps } from './type';

import styles from './styles.module.css';

function InputField({
  placeholder,
  type = 'text',
  handleChange = () => {},
}: InputFieldProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default InputField;

import React from 'react';

import clsx from 'clsx';

import { ISelectProps } from './interface';

import styles from './styles.module.css';

const Select: React.FC<ISelectProps> = ({ options, name, inputStyle }) => {
  return (
    <select name={name} id={name} className={clsx(styles.select, inputStyle)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;

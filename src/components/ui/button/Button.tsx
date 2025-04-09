import React from 'react';

import clsx from 'clsx';

import { BUTTON_VARIANTS } from './enum';
import { ButtonProps } from './types';

import styles from './styles.module.css';

const Button = ({
  children,
  onClick,
  variant = BUTTON_VARIANTS.PRIMARY,
  inputStyle,
}: ButtonProps) => {
  let className;
  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      className = styles.primary;
      break;
    case BUTTON_VARIANTS.SECONDARY:
      className = styles.secondary;
      break;
    case BUTTON_VARIANTS.LINK:
      className = styles.link;
      break;
    default:
      className = styles.primary;
  }
  const newClass = clsx(className, inputStyle);
  return (
    <button className={newClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

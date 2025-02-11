import React from 'react';

import { BUTTON_VARIANTS } from './enum';
import { ButtonProps } from './types';

import styles from './styles.module.css';

function Button({
  children,
  onClick,
  variant = BUTTON_VARIANTS.PRIMARY,
}: ButtonProps) {
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

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

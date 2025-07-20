import React from 'react';

import clsx from 'clsx';

import InputField from '@/components/ui/input/InputField';
import Select from '@/components/ui/select/Select';

import styles from './styles.module.css';

interface FormFieldProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'radio' | 'select'; // Supported types
  options?: { value: string; label: string }[]; // For dropdowns
  name: string;
  register: any;
  className?: string;
  value?: string;
  placeholder?: string;
  formStyle?: string;
  inputStyle?: string;
  labelStyle?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  icon,
  type = 'text',
  options,
  name,
  register,
  formStyle = '',
  value,
  placeholder,
  inputStyle = '',
  labelStyle = '',
}) => {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <Select
            options={options}
            name={name}
            {...register(name)}
            inputStyle={inputStyle}
          />
        );
      case 'radio':
        return (
          <InputField
            dynamicCls={inputStyle}
            type="radio"
            value={value}
            {...register(name)}
          />
        );
      default:
        return (
          <InputField
            dynamicCls={inputStyle}
            type={type}
            placeholder={placeholder}
            {...register(name)}
          />
        );
    }
  };

  return (
    <div className={clsx(styles.formGroup, formStyle)}>
      {label && (
        <label htmlFor={name} className={clsx(styles.label, labelStyle)}>
          {label} {icon && <span className={styles.icon}>{icon}</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {renderInput()}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};

export default FormField;

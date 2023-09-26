import React from 'react';
import { useField } from 'formik';

import { BasicSelect, Feedback, FormControl, HelpText, Label } from '../Shared';

interface ISelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  id: string;
  name: string;
  helpText?: string;
  placeholder?: string;
  options: ISelectOption[];
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({ label, helpText, options, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  // Determine if feedback should be displayed
  const [didFocus, setDidFocus] = React.useState<boolean>(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (!!didFocus || meta.touched) && !!meta.error;

  return (
    <FormControl>
      <Label htmlFor={props.id}>{label}</Label>
      <BasicSelect
        {...props}
        {...field}
        isInvalid={!!meta.error}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={`${props.id}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </BasicSelect>
      {helpText && (
        <HelpText id={`${props.id}-help`} tabIndex={-1}>
          {helpText}
        </HelpText>
      )}
      {showFeedback && (
        <Feedback id={`${props.id}-feedback`} aria-live="polite" isInvalid={!!meta.error}>
          {meta.error ? meta.error : `${label} is valid.`}
        </Feedback>
      )}
    </FormControl>
  );
};

export default Select;

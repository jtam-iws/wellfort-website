import React from 'react';
import { useField } from 'formik';

import { BasicInput, Feedback, FormControl, HelpText, Label } from '../Shared';

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  helpText?: string;
  type: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Determine if feedback should be displayed
  const [didFocus, setDidFocus] = React.useState<boolean>(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    ((!!didFocus && (props.type === 'text' ? field.value.trim().length > 2 : true)) ||
      meta.touched) &&
    !!meta.error;

  return (
    <FormControl>
      <Label htmlFor={props.id}>{label}</Label>
      <BasicInput
        {...props}
        {...field}
        isInvalid={!!meta.error}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
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

export default InputField;

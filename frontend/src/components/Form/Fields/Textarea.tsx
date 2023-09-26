import React from 'react';
import { useField } from 'formik';

import { BasicTextarea, Feedback, FormControl, HelpText, Label } from '../Shared';

interface TextareaFieldProps {
  label: string;
  id: string;
  name: string;
  helpText?: string;
  rows?: number;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Determine if feedback should be displayed
  const [didFocus, setDidFocus] = React.useState<boolean>(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    ((!!didFocus && field.value.trim().length > 2) || meta.touched) && !!meta.error;

  return (
    <FormControl>
      <Label htmlFor={props.id}>{label}</Label>
      <BasicTextarea
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

export default TextareaField;

import React from 'react';
import { useField } from 'formik';

import { BasicCheck, CheckLabel, CheckWrapper, Feedback, FormControl, HelpText } from '../Shared';

export interface CheckProps {
  label: string;
  id: string;
  name: string;
  helpText?: string;
  value?: string;
  required?: boolean;
}

interface CheckComponentProps extends CheckProps {
  type: 'radio' | 'checkbox';
}

const Check: React.FC<CheckComponentProps> = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Determine if feedback should be displayed
  const [didFocus, setDidFocus] = React.useState<boolean>(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (!!didFocus || meta.touched) && !!meta.error;

  return (
    <FormControl>
      <CheckWrapper>
        <BasicCheck
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
        <CheckLabel>{label}</CheckLabel>
      </CheckWrapper>
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

export default Check;

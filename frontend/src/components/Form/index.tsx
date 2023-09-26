import React from 'react';
import loadable from '@loadable/component';
import type { LoadableComponent } from '@loadable/component';
import Constraint from '~components/Constraint';

import type { FormBlock } from '~types/blocks';

const FeedbackForm = loadable(() => import('./Forms/FeedbackForm'));

const Form: React.FC<FormBlock> = ({ form, confirmation }) => {
  const formIds: Record<string, string> = {
    feedback: 'XrSAzJP1nhn'
  };

  const forms: Record<string, LoadableComponent<any>> = {
    feedback: FeedbackForm
  };

  const FormComponent = forms[form];
  const id = formIds[form];

  return FormComponent && id ? (
    <Constraint>
      <FormComponent id={id} confirmation={confirmation} />
    </Constraint>
  ) : null;
};

export default Form;

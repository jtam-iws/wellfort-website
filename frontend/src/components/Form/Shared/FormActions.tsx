import React from 'react';
import 'twin.macro';
import { useFormikContext } from 'formik';

import { Button } from '~components/Buttons';

const FormActions: React.FC = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <div tw="flex justify-end space-x-3 mt-4">
      <Button disabled={isSubmitting} style="outlined" colour="secondary" reset>
        Reset
      </Button>
      <Button disabled={isSubmitting} style="filled" colour="secondary" submit>
        Submit
      </Button>
    </div>
  );
};

export default FormActions;

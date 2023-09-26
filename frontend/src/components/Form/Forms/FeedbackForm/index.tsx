import React from 'react';
import 'twin.macro';
import { useFormik, FormikProvider, Form as FormikForm } from 'formik';

import { Input, Select, Textarea } from '~components/Form/Fields';
import { FormActions, Success } from '~components/Form/Shared';

import useFormCarry from '~hooks/useFormCarry';
import type { FormProps } from '~types/form';

import validationSchema from './validation';

const Form: React.FC<FormProps> = ({ id, confirmation }) => {
  const { response, error, handleSubmit } = useFormCarry(id);
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    },
    onSubmit: handleSubmit,
    validationSchema
  });

  if (response && response.status === 'success') {
    return <Success>{confirmation || response.message}</Success>;
  }

  return (
    <FormikProvider value={form}>
      <FormikForm>
        <div tw="max-w-6xl">
          <div tw="md:(grid grid-cols-3 gap-4)">
            <Input id="name" name="name" label="Name" type="text" required />
            <Input id="email" name="email" label="Email" type="email" />
            <Input id="phone" name="phone" label="Phone" type="text" />
          </div>
          <Select
            id="program"
            name="program"
            label="Program/Service"
            placeholder="Choose an item"
            options={[
              {
                value: 'Bloom Clinic',
                label: 'Bloom Clinic'
              },
              {
                value: 'Dental - Bramalea',
                label: 'Dental - Bramalea'
              },
              {
                value: 'Dental - Four Corners',
                label: 'Dental - Four Corners'
              },
              {
                value: 'Diabetes Program - Bramalea',
                label: 'Diabetes Program - Bramalea'
              },
              {
                value: 'Diabetes Program - Four Corners',
                label: 'Diabetes Program - Four Corners'
              },
              {
                value: 'Primary Care',
                label: 'Primary Care'
              },
              {
                value: 'Group Session',
                label: 'Group Session'
              },
              {
                value: 'General Information',
                label: 'General Information'
              },
              {
                value: 'Other',
                label: 'Other'
              }
            ]}
          />
          <Textarea id="message" name="message" label="Message" rows={8} />
          <FormActions />
        </div>
      </FormikForm>
    </FormikProvider>
  );
};

export default Form;

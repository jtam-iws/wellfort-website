import React from 'react';
import type { IFormCarryResponse } from '~types/form';

const useFormCarry = (id: string) => {
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState<IFormCarryResponse | null>(null);

  const handleSubmit = async (values: Record<string, any>) => {
    await fetch(`https://formcarry.com/s/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((res) => setResponse(res))
      .catch((error) => setError(error));
  };

  return { response, error, handleSubmit };
};

export default useFormCarry;

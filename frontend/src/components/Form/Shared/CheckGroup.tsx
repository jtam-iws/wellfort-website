import React from 'react';
import tw from 'twin.macro';

interface CheckGroupProps {
  label: string;
  id: string;
  direction: BlockDirection;
}

const CheckGroup: React.FC<CheckGroupProps> = ({ label, id, direction, children }) => (
  <>
    <p id={id} tw="text-xl font-medium mb-1 mt-4">
      {label}
    </p>
    <div
      role="group"
      aria-labelledby={id}
      css={[tw`flex flex-col`, direction === 'horizontal' && tw`md:(flex-row space-x-2)`]}
    >
      {children}
    </div>
  </>
);

export default CheckGroup;

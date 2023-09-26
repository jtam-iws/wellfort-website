import React from 'react';
import tw from 'twin.macro';

const colourMap = [
  {
    label: 'Primary',
    value: tw`bg-blue`
  },
  {
    label: 'Secondary',
    value: tw`bg-orange`
  },
  {
    label: 'Tertiary',
    value: tw`bg-yellow`
  },
  {
    label: 'Light',
    value: tw`bg-blue-50`
  },
  {
    label: 'Dark',
    value: tw`bg-blue-700`
  }
];

const Colours: React.FC = () => (
  <ul tw="grid grid-cols-1 gap-8 md:(grid-cols-3) lg:(grid-cols-5)">
    {colourMap.map((colour) => (
      <li key={colour.label} tw="flex flex-col space-y-2">
        <span tw="text-lg font-medium">{colour.label}</span>
        <span css={[tw`rounded-lg h-24 w-24`, colour.value]} />
      </li>
    ))}
  </ul>
);

export default Colours;

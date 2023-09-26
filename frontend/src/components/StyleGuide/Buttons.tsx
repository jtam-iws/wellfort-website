import React from 'react';
import 'twin.macro';

import Heading from '~components/Heading';
import { Button } from '~components/Buttons';

import { colours } from './maps';

const Buttons: React.FC = () => (
  <>
    <Heading level="h2">Filled</Heading>
    <div tw="flex mt-6 mb-3 flex-col md:(flex-row items-center flex-wrap -mx-1)">
      {colours.map((colour) => (
        <div key={`filled-${colour}`} tw="md:(mx-1)">
          <Button colour={colour} style="filled" to="#">
            {colour.charAt(0).toUpperCase() + colour.slice(1)}
          </Button>
        </div>
      ))}
    </div>
    <Heading level="h2">Outlined</Heading>
    <div tw="flex mt-6 mb-3 flex-col md:(flex-row items-center flex-wrap -mx-1)">
      {colours.map((colour) => (
        <div key={`outlined-${colour}`} tw="md:(mx-1)">
          <Button colour={colour} style="outlined" to="#">
            {colour.charAt(0).toUpperCase() + colour.slice(1)}
          </Button>
        </div>
      ))}
    </div>
  </>
);

export default Buttons;

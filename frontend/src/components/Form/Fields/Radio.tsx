import React from 'react';

import Check from './Check';
import type { CheckProps } from './Check';

const Radio: React.FC<CheckProps> = (props) => <Check type="radio" {...props} />;

export default Radio;

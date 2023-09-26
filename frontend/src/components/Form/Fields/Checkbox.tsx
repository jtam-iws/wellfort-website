import React from 'react';

import Check from './Check';
import type { CheckProps } from './Check';

const Checkbox: React.FC<CheckProps> = (props) => <Check type="checkbox" {...props} />;

export default Checkbox;

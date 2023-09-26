import { FilterXSS, whiteList } from 'xss';

export const xss = new FilterXSS({
  whiteList
});

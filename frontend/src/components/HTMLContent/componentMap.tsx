import { Heading2, Heading3, Heading4, Heading5, Heading6 } from '~components/Heading';
import {
  A,
  Bold,
  Hr,
  Img,
  Italic,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '~components/HTML';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: Record<string, React.FC<any>> = {
  /**
   * HTML Elements
   */
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Text,
  a: A,
  strong: Bold,
  img: Img,
  em: Italic,
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,
  hr: Hr
};

export default components;

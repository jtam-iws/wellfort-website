import React from 'react';
import tw from 'twin.macro';

import Heading from '~components/Heading';
import { A, Bold, Hr, Italic, ListItem, OrderedList, Text, UnorderedList } from '~components/HTML';

const Typography: React.FC = () => (
  <>
    <Heading level="h2">Heading 2</Heading>
    <Heading level="h3">Heading 3</Heading>
    <Heading level="h4">Heading 4</Heading>
    <Heading level="h5">Heading 5</Heading>
    <Heading level="h6">Heading 6</Heading>
    <Heading level="h2">Paragraph Text</Heading>
    <Text>
      Curabitur vitae egestas leo. Sed elementum dolor nibh, <Bold>vel suscipit urna</Bold> eleifend
      vel. Ut ac fringilla erat. Suspendisse <Italic>tincidunt a sem et imperdiet</Italic>.
      Suspendisse in auctor augue. Nam velit felis, vehicula quis rutrum in,{' '}
      <A href="#">dictum a dui</A>. Nulla nibh mi, ullamcorper eu ante sit amet, tristique volutpat
      nulla. Aliquam tempor purus sit amet enim luctus volutpat. Aenean id tincidunt risus.
    </Text>
    <Hr />
    <Heading level="h2">Lists</Heading>
    <Heading level="h3">Ordered List</Heading>
    <OrderedList>
      <ListItem>Integer vel libero ut magna aliquet ultrices ac ut massa.</ListItem>
      <ListItem>Morbi tincidunt magna eget accumsan eleifend.</ListItem>
      <ListItem>Sed placerat ligula non dictum consectetur.</ListItem>
    </OrderedList>
    <Heading level="h3">Unordered List</Heading>
    <UnorderedList>
      <ListItem>Integer vel libero ut magna aliquet ultrices ac ut massa.</ListItem>
      <ListItem>Morbi tincidunt magna eget accumsan eleifend.</ListItem>
      <ListItem>Sed placerat ligula non dictum consectetur.</ListItem>
    </UnorderedList>
  </>
);

export default Typography;

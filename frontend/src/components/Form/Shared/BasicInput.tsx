import tw, { styled } from 'twin.macro';

interface BasicInputProps {
  isInvalid?: boolean;
}

const BasicInput = styled.input<BasicInputProps>(({ isInvalid }) => [
  // Basic
  tw`py-2 px-3 border-2 border-gray-100 bg-gray-50 rounded-2xl shadow-none`,
  // Hover
  tw`hover:(border-gray-300 shadow-sm)`,
  // Focus
  tw`focus:(outline-none ring ring-blue ring-opacity-20 border-blue)`,
  // Invalid
  isInvalid && tw`border-red-500 bg-red-50`
]);

export default BasicInput;

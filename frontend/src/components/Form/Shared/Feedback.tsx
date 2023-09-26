import tw, { styled } from 'twin.macro';

interface FeedbackProps {
  isInvalid?: boolean;
}

const Feedback = styled.div<FeedbackProps>(({ isInvalid }) => [
  tw`inline-flex py-2 px-3 rounded-2xl text-sm border`,
  isInvalid
    ? tw`bg-red-50 border-red-500 text-red-900`
    : tw`bg-green-50 border-green-500 text-green-900`
]);

export default Feedback;

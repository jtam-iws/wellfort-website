import tw, { theme, css } from 'twin.macro';

const getStyles = () => css`
  --swiper-theme-color: ${theme`colors.gray.800`};
  .swiper-button-next,
  .swiper-button-prev {
    ${tw`bg-white bg-opacity-80 rounded py-2 px-3 hover:(bg-opacity-100)`}
    &:after {
      ${tw`text-base`}
    }
  }
`;

export default getStyles;

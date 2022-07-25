import styled, { css } from "styled-components";

type ImgProps = {
  src: string;
  maxWidth: number;
  alt?: string;
  className?: string;
  useLightBox?: boolean;
  onClick?: () => void;
};

const Image = styled.img.attrs<ImgProps>(({ src }) => ({
  src,
}))<ImgProps>`
  max-width: ${({ maxWidth }) => maxWidth}%;
  height: auto;
  ${({ useLightBox = false }) =>
    useLightBox &&
    css`
      cursor: pointer;
    `}
  ${({ alt = "" }) =>
    alt &&
    css`
      alt: ${alt};
    `}
`;

export default Image;

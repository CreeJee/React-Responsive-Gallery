import styled from "styled-components";

interface ImageWrapperProps {
  paddingBottom: number;
  children: React.ReactNode;
}
const StyledImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
`;
const ImageWrapper = ({ children, ...styles }: ImageWrapperProps) => (
  <StyledImageWrapper {...styles}>{children}</StyledImageWrapper>
);
export default ImageWrapper;

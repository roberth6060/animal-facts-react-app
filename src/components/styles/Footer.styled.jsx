import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  text-align: center;
  bottom: 0 !important;
  width: 100%;
  padding: 5px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.6;
`;

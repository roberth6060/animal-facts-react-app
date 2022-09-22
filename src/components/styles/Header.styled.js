import styled from "styled-components";

export const StyledHeader = styled.header`
  /* background-color: ${({ theme }) => theme.colors.header}; */
  text-align: center;
  h1 {
    color: #0078aa;
  }
  &:hover {
    /* background-color: #0078aa; */
    transition: 0.6s;
  }
`;

import styled from "styled-components";

export const SelectBox = styled.select`
  border: 1px (${({ theme }) => theme.colors.grey}) solid;
  border-radius: 5px;
  height: 50px;
  appearance: none;
  padding: 0 30px 0 15px;
  color: ${({ theme }) => theme.colors.black};
  background-color: (${({ theme }) => theme.colors.primary});
  font-size: 20px;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    font-size: 32px;
  }
`;

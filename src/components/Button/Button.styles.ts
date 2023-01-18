import styled from "styled-components";

export const ButtonElement = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.grey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    box-shadow: none;
  }
`;

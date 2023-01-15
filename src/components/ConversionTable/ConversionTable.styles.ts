import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-width: 200px;
  height: 50px;
  margin-top: 50px;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    margin-top: 20px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const AmountInput = styled.input`
  border: none;
  appearance: none;
  padding: 0 30px 0 15px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;

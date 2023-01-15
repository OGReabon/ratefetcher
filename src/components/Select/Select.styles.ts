import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 200px;
  height: 50px;
`;

export const SelectBox = styled.select`
  border: none;
  appearance: none;
  padding: 0 30px 0 15px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  background-color: (${({ theme }) => theme.colors.primary});
  font-size: 20px;
`;

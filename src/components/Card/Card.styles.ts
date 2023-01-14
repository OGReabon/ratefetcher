import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1040px;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    max-width: 320px;
    padding: 0 16px;
  }
`;

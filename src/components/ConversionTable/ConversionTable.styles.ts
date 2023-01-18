import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1040px;
  width: 100%;
  height: max(300px, fit-content);
  margin-bottom: 50px;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    max-width: 320px;
    padding: 0 16px;
  }
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    " . select . . . ."
    " . input . amount amount currency"
    " . button . . . .";
  width: 100%;
  height: 100%;
  margin-top: 50px;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "select select select"
      "input input input"
      "button button button"
      " . . ."
      "amount amount currency";
  }
`;

export const SelectContainer = styled.div`
  grid-area: select;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    padding: 10px;
  }
`;

export const InputContainer = styled.div`
  grid-area: input;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  margin: auto;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    padding: 10px;
  }
`;

export const AmountContainer = styled.p`
  grid-area: amount;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const CurrencyContainer = styled.p`
  grid-area: currency;
  @media (${({ theme }) => theme.mediaQueries.mdMax}) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`;

export const AmountInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  appearance: none;
  padding: 0 30px 0 15px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
`;

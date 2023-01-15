import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  overflow: auto;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    max-width: 320px;
    padding: 0 16px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    font-size: 0.8rem;
  }
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: left;
  font-size: 1.2rem;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    font-size: 0.8rem;
  }
`;

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  text-align: left;
  font-size: 1.2rem;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    font-size: 0.8rem;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px 20px;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    padding: 10px 16px;
  }
`;

export const TableDataCell = styled.td`
  padding: 10px 20px;
  @media (${({ theme }) => theme.mediaQueries.smMax}) {
    padding: 10px 16px;
  }
`;

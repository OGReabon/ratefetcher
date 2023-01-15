import { useQuery } from "react-query";
import { fetchRates } from "../../utils/queries";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from "./RatesTable.styles";

export const RatesTable = () => {
  const { data, status } = useQuery("rates", fetchRates);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error fetching data </p>;
  }

  const rates = Object.values(data || {});

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Country</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Code</TableHeaderCell>
            <TableHeaderCell>Rate</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map((rate) => (
            <TableRow key={rate.code}>
              <TableDataCell>{rate.country}</TableDataCell>
              <TableDataCell>{rate.currency}</TableDataCell>
              <TableDataCell>{rate.amount}</TableDataCell>
              <TableDataCell>{rate.code}</TableDataCell>
              <TableDataCell>{rate.rate}</TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatesTable;

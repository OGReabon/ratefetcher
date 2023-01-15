import {
  SectionContainer,
  AmountInput,
  RowContainer,
} from "./ConversionTable.styles";
import Select from "../Select";
import { useEffect, useState } from "react";
import { getCurrencyAmount } from "../../utils/rate-utils";
import { useQuery } from "react-query";
import { fetchRates } from "../../utils/queries";
import Button from "../Button";

const ConversionTable = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState<number | undefined>();
  const [amountCZK, setAmountCZK] = useState<number | undefined>();

  const { data, status } = useQuery("rates", fetchRates);

  const computeAmount = () => {
    if (amountCZK && status === "success") {
      setAmount(getCurrencyAmount(amountCZK, Number(data[currency].rate)));
    } else {
      setAmount(0);
    }
  };

  useEffect(() => {
    setAmount(undefined);
  }, [currency]);

  return (
    <SectionContainer>
      <h2>Convert</h2>
      <Select
        onChange={(e) => {
          setCurrency(e.target.value);
        }}
      />
      <AmountInput
        placeholder="Enter amount in CZK"
        onChange={(e) => {
          setAmountCZK(Number(e.target.value));
        }}
      />
      <Button onClick={computeAmount}>Convert</Button>
      <p>
        {amount} {currency}
      </p>
    </SectionContainer>
  );
};

export default ConversionTable;

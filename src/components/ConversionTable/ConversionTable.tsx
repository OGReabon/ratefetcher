import {
  SectionContainer,
  AmountInput,
  ColumnContainer,
  CardContainer,
  SelectContainer,
  InputContainer,
  ButtonContainer,
  AmountContainer,
  CurrencyContainer,
} from "./ConversionTable.styles";
import Select from "../Select";
import { useCallback, useEffect, useState } from "react";
import { getCurrencyAmount } from "../../utils/rate-utils";
import { useQuery } from "react-query";
import { fetchRates } from "../../utils/queries";
import Button from "../Button";

const ConversionTable = () => {
  const [currency, setCurrency] = useState<string | undefined>();
  const [amount, setAmount] = useState<number | undefined>();
  const [amountCZK, setAmountCZK] = useState<number | undefined>();

  const { data, status } = useQuery("rates", fetchRates);

  const computeAmount = useCallback(() => {
    if (amountCZK && status === "success" && currency) {
      setAmount(getCurrencyAmount(amountCZK, Number(data[currency].rate)));
    } else if (!currency) {
      alert("Please select a currency");
    } else {
      setAmount(0);
    }
  }, [amountCZK, currency, data, status]);

  // This to resets the amount when the currency changes
  useEffect(() => {
    setAmount(undefined);
  }, [currency]);

  return (
    <CardContainer>
      <h2>Convert</h2>
      <SectionContainer>
        <SelectContainer>
          <Select
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          />
        </SelectContainer>
        <InputContainer>
          <AmountInput
            placeholder="Enter amount in CZK"
            onChange={(e) => {
              setAmountCZK(Number(e.target.value));
            }}
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={computeAmount}>Convert</Button>
        </ButtonContainer>
        <AmountContainer>{amount}</AmountContainer>
        <CurrencyContainer>{currency}</CurrencyContainer>
      </SectionContainer>
    </CardContainer>
  );
};

export default ConversionTable;

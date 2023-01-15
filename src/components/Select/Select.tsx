import { SelectBox, SelectContainer } from "./Select.styles";
import { useQuery } from "react-query";
import { fetchRates } from "../../utils/queries";
import React from "react";

const Select = ({
  onChange,
}: {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const { data, status } = useQuery("rates", fetchRates);

  const codes = Object.keys(data || {});

  if (status === "loading") {
    return (
      <SelectContainer>
        <SelectBox onChange={onChange}>
          {codes.map((code) => {
            return (
              <option key={code} value={code}>
                {code}
              </option>
            );
          })}
        </SelectBox>
      </SelectContainer>
    );
  }

  if (status === "error") {
    return <p>Error fetching data </p>;
  }

  return (
    <SelectContainer>
      <SelectBox onChange={onChange}>
        {codes.map((code) => {
          return (
            <option key={code} value={code}>
              {code}
            </option>
          );
        })}
      </SelectBox>
    </SelectContainer>
  );
};

export default Select;

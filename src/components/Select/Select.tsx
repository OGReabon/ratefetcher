import { SelectBox } from "./Select.styles";
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
      <SelectBox onChange={onChange}>
        {codes.map((code) => {
          return (
            <option key={code} value={code}>
              {code}
            </option>
          );
        })}
      </SelectBox>
    );
  }

  if (status === "error") {
    return <p>Error fetching data </p>;
  }

  return (
    <SelectBox onChange={onChange} defaultValue="Select currency">
      <option disabled selected>
        Select currency
      </option>
      {codes.map((code) => {
        return (
          <option key={code} value={code}>
            {code}
          </option>
        );
      })}
    </SelectBox>
  );
};

export default Select;

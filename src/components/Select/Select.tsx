import { SelectBox, SelectContainer } from "./Select.styles";

const Select = ({ options }: { options: string[] }) => {
  return (
    <SelectContainer>
      <SelectBox>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </SelectBox>
    </SelectContainer>
  );
};

export default Select;

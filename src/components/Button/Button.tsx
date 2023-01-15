import { ButtonElement } from "./Button.styles";

export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};

export default Button;

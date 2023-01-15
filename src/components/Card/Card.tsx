import { CardContainer } from "./Card.styles";

const Card = (children: JSX.Element | JSX.Element[]) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

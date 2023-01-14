import { useQuery } from "react-query";
import { fetchRates } from "./fetchers";

export const Rates = () => {
  const { data, status } = useQuery("rates", fetchRates);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error fetching data </p>;
  }

  return <div>fetched correctly</div>;
};

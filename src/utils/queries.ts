import { rateParser } from "./rate-utils";

const PROXY_SERVER_URL = "http://localhost:8080";
const CNB_EXCHANGE_API_URL =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing";

export async function fetchRates() {
  // Parse date into DD.MM.YYYY format required by the API
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const date = dd + "." + mm + "." + yyyy;

  // Fetch data from the API using the proxy server to bypass CORS
  const response = await fetch(
    `${PROXY_SERVER_URL}/${CNB_EXCHANGE_API_URL}/daily.txt?${date}`
  );
  const rawData = await response.text();

  const data = rateParser(rawData);

  return data;
}

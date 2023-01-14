export interface Rate {
  country: string;
  currency: string;
  amount: string;
  code: string;
  rate: string;
}

export const rateParser = (data: string) => {
  // Split the data into lines
  const lines = data.split("\n");

  // Get the rates from the lines
  const rates = lines.slice(2);

  // Create an object with the rates
  const rateObject = rates.reduce((prev, current) => {
    const [country, currency, amount, code, rate] = current.split("|");

    return { ...prev, [code]: { country, currency, amount, code, rate } };
  }, {}) as { [key: string]: Rate };

  return rateObject;
};

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
  // Remove the last line as it is always undefined
  rates.splice(-1, 1);

  // Create an object with the rates
  const rateObject = rates.reduce((prev, current) => {
    const [country, currency, amount, code, rate] = current.split("|");

    return { ...prev, [code]: { country, currency, amount, code, rate } };
  }, {}) as { [key: string]: Rate };

  return rateObject;
};

// helper function to get the currency amount
export const getCurrencyAmount = (amountCZK: number, rate: number) => {
  return amountCZK / rate;
};

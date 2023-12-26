import { availableCoins } from "../constants/coins";

const getCoinsData = async () => {
  const promises = availableCoins.map((coin) => {
    return fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
  });

  const response = await Promise.all(promises);

  console.log(response);
};

export default getCoinsData;

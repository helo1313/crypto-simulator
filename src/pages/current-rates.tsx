import { useQuery } from "@tanstack/react-query";
import classes from "../styles/Pages/current-rates.module.scss";
import getCoinsData from "@/utils/functions/getCoinsData";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export default function CurrentRates() {
  const { data, isPending } = useQuery({
    queryKey: ["crypto-rates"],
    queryFn: getCoinsData,
  });

  return (
    <div className={classes.currentRates}>
      <div className={classes.header}>
        <h2>Current rates</h2>
      </div>
      <div>{isPending && <p>Loading...</p>}</div>
      <div className={classes.coinDataContainer}>
        {data?.map((coin) => {
          const coinPriceChange =
            coin.market_data.price_change_percentage_24h.toFixed(2);

          return (
            <div className={classes.coinDataRow}>
              <img
                className={classes.coinImage}
                src={coin.image.small}
                alt={`${coin.localization.en} logo`}
              />
              <p className={classes.coinName}>{coin.localization.en}</p>
              <p className={classes.coinPrice}>
                {`${coin.market_data.current_price.usd}$`}
              </p>
              <p
                className={`${classes.coinPriceChange} ${
                  coinPriceChange >= 0 ? classes.possitive : classes.negative
                }`}
              >
                {coinPriceChange >= 0 ? (
                  <FaLongArrowAltUp />
                ) : (
                  <FaLongArrowAltDown />
                )}
                {coinPriceChange}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import classes from "../styles/Pages/current-rates.module.scss";
import getCoinsData from "@/utils/functions/getCoinsData";
import { useEffect } from "react";

export default function CurrentRates() {
  const { data, isPending } = useQuery({
    queryKey: ["crypto-rates"],
    queryFn: getCoinsData,
  });

  useEffect(() => {
    console.log(data), [data];
  });

  return (
    <div className={classes.currentRates}>
      CURRENT RATES
      <div>{isPending && <p>PENDING</p>}</div>
      <div>
        {data?.map((coin) => (
          <div>
            <p>{`${coin.name} : ${coin.market_data.current_price.usd}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

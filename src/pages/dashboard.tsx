import Button from "@/components/ui/button/Button";
import classes from "../styles/Pages/dashboard.module.scss";
import getCoinsData from "@/utils/functions/getCoinsData";

export default function Dashboard() {
  const test = () => {
    getCoinsData();
  };

  return (
    <div className={classes.dashboard}>
      DASHBOARD
      <Button type="primary" onClick={test}>
        TEST
      </Button>
    </div>
  );
}

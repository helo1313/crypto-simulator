import { Inter } from "next/font/google";

import Button from "@/components/ui/button/Button";

import classes from "../styles/Pages/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={classes.home}>
      <main className={classes.mainContainer}>
        <h3>Crypto Simulator</h3>
        <h1>Play crypto & don't bankrupt</h1>
        <div className={classes.buttonContainer}>
          <Button onClick={() => {}} type="primary">
            {" "}
            Sign In
          </Button>
          <Button
            onClick={() => {
              console.log("button1");
            }}
            type="secondary"
          >
            {" "}
            About site
          </Button>
        </div>
        <p>
          {" "}
          Already have account ?{" "}
          <Button
            onClick={() => {
              console.log("button1");
            }}
            type="inline"
          >
            {" "}
            Login
          </Button>
        </p>
      </main>
    </div>
  );
}

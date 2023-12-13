import Link from "next/link";
import Logo from "../logo/Logo";

import classes from "./header.module.scss";
import Button from "../ui/button/Button";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <Logo />

        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/about">About site</Link>
            </li>
            <li>
              <Link href="/about">Current rates</Link>
            </li>
            <li>
              <Button onClick={() => {}} type="primary">
                {" "}
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

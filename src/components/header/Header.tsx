import Link from "next/link";
import Logo from "../logo/Logo";

import Button from "../ui/button/Button";
import { useRouter } from "next/router";
import { LOGIN_ROUTE } from "@/utils/constants/routes";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

import classes from "./header.module.scss";
import { signOut } from "firebase/auth";

const Header: React.FC = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

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
              {user ? (
                <Button
                  onClick={() => {
                    signOut(auth);
                    router.push("/");
                  }}
                  type="primary"
                >
                  {" "}
                  Sign out
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    router.push(LOGIN_ROUTE);
                  }}
                  type="primary"
                >
                  {" "}
                  Login
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

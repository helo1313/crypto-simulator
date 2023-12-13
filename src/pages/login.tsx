import { useState } from "react";
import classes from "../styles/Pages/login.module.scss";
import Input from "@/components/ui/input/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className={classes.login}>
      <h2>Log in to your account</h2>
      <form className={classes.form}>
        <Input
          name="email"
          label="Email address"
          placeholder="Enter your email here"
          value={email}
          setValue={setEmail}
          error={emailError}
        />

        <Input
          name="password"
          label=" Password"
          placeholder="Enter your password here"
          value={password}
          setValue={setPassword}
          error={passwordError}
        />

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

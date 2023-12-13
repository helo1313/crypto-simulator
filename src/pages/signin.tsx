import { useState } from "react";
import classes from "../styles/Pages/signin.module.scss";
import Input from "@/components/ui/input/Input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  return (
    <div className={classes.signIn}>
      <h2>Create new account</h2>
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
          label="Password"
          placeholder="Enter your password here"
          value={password}
          setValue={setPassword}
          error={passwordError}
        />

        <Input
          name="confirm password"
          label="Confirm password"
          placeholder="Enter your password here again"
          value={confirmPassword}
          setValue={setConfirmPassword}
          error={confirmPasswordError}
        />

        <button className={classes.button} type="submit">
          Create account
        </button>
      </form>
    </div>
  );
}

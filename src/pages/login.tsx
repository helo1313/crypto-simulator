import { useState } from "react";
import classes from "../styles/Pages/login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className={classes.login}>
      <h2>Log in to your account</h2>
      <form className={classes.form}>
        <div className={classes.inputContainer}>
          <label htmlFor="email" className={classes.label}>
            Email address
          </label>
          <input
            value={email}
            name="email"
            placeholder="Enter your email here"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            className={classes.input}
          />
          <label className={classes.errorLabel}>{emailError}</label>
        </div>

        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.label}>
            Password
          </label>
          <input
            value={password}
            name="password"
            placeholder="Enter your password here"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            className={classes.input}
          />
          <label className={classes.errorLabel}>{passwordError}</label>
        </div>

        <button className={classes.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

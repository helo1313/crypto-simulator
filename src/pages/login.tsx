import { useState } from "react";
import classes from "../styles/Pages/login.module.scss";
import Input from "@/components/ui/input/Input";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(email, password);

      console.log("Odpowiedz" + res);
    } catch (error) {
      console.log("ERROR" + error);
    }
  };

  return (
    <div className={classes.login}>
      <h2>Log in to your account</h2>
      <form className={classes.form} onSubmit={handleLogin}>
        <Input
          name="email"
          type="text"
          label="Email address"
          placeholder="Enter your email here"
          value={email}
          setValue={setEmail}
          error={emailError}
        />

        <Input
          name="password"
          type="password"
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

import Button from "./Button.js";
import { useRef } from "react";

function Login({ click, errMsg }) {
  const input_ref = useRef("");

  return (
    <>
      <div className="center">
        <div>{errMsg}</div>
        <div>
          <input ref={input_ref}></input>
        </div>
        <Button
          color="yellow"
          name="login"
          click={() => click(input_ref.current.value)}
        ></Button>
      </div>
    </>
  );
}

export default Login;

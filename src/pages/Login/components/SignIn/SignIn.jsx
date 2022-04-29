import React from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";

function SignIn() {
  return (
    <form>
      <div>
        <label>Email address</label>
        <Input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <Password />
      </div>
      <button>Continue</button>
    </form>
  );
}

export default SignIn;

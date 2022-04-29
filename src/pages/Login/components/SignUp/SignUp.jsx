import React from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";

function SignUp() {
  return (
    <form>
      <div>
        <label>Email address</label>
        <Input type="email" name="email" />
      </div>
      <div>
        <label>Name</label>
        <Input type="text" name="name" />
      </div>
      <div>
        <label>Password</label>
        <Password />
      </div>
      <button>Continue</button>
    </form>
  );
}

export default SignUp;

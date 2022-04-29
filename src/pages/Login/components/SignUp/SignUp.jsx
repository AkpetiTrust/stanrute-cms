import React from "react";
import Password from "../Password/Password";

function SignUp() {
  return (
    <form>
      <div>
        <label>Email address</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
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

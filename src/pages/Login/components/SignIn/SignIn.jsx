import React, { useState } from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";

function SignIn() {
  const [signInError, setSignInError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form>
      <div>
        <label>Email address</label>
        <Input error={signInError} required={true} type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <Password error={signInError} showParagraph={true} />
      </div>
      <button>Continue</button>
    </form>
  );
}

export default SignIn;

import React, { useState } from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";
import { constants } from "../../../../constants";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = constants;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email.endsWith("stanrute.com")) {
      return setSignUpError(true);
    }
    setSignUpError(false);
    fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email address</label>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
          type="email"
          name="email"
          error={signUpError}
        />
        {signUpError && <p>*this email is not supported as an admin</p>}
      </div>
      <div>
        <label>Name</label>
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          required={true}
          type="text"
          name="name"
        />
      </div>
      <div>
        <label>Password</label>
        <Password
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button>Continue</button>
    </form>
  );
}

export default SignUp;

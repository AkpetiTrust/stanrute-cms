import React, { useState } from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";
import { constants } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components";

function SignIn() {
  const [signInError, setSignInError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { apiUrl } = constants;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSignInError(false);
    fetch(`${apiUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (!result.status) {
          return setSignInError(true);
        }
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email address</label>
        <Input
          error={signInError}
          required={true}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
      </div>
      <div>
        <label>Password</label>
        <Password
          error={signInError}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          showParagraph={true}
        />
      </div>
      {loading ? (
        <button>
          <Loading color="#ccffe9" height={"26px"} />
        </button>
      ) : (
        <button>Continue</button>
      )}
    </form>
  );
}

export default SignIn;

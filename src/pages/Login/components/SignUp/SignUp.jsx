import React, { useState } from "react";
import Password from "../Password/Password";
import { Input } from "../../../../components";
import { constants } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../../../components";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = constants;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email.endsWith("stanrute.com")) {
      return setSignUpError(true);
    }
    setSignUpError(false);
    setEmailError(false);
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
        setLoading(false);
        if (!result.status) {
          return setEmailError(true);
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
          type="email"
          name="email"
          error={signUpError || emailError}
        />
        {signUpError && (
          <p className="error">*this email is not supported as an admin</p>
        )}
        {emailError && <p className="error">*this email has been taken</p>}
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

export default SignUp;

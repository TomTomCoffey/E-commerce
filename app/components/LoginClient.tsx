"use client";
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  console.log("email", email);
  console.log("password", password);

  const login = async () => {
    const loginResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    // if (loginResponse && !loginResponse.error) {
    //   router.push("/products");
    // } else {
    //   console.log("Error: ", loginResponse);
    // }
  };

  return (
    <div>
      <div className="box">
        <div className="h1">Login</div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;

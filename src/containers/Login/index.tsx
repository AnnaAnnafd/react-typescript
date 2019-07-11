import React from "react";

interface Props {
  name: string;
}

const Login = ({ name }: Props) => {
  return <div className="App">Login page {name}</div>;
};

export default Login;

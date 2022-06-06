import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import {AuthContext}from "../context/AuthContext"
 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("error");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/Home" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          data-cy="login-email" 
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
          data-cy="login-password" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button data-cy="login-submit" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

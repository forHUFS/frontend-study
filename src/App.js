//import logo from './logo.svg';
//import './App.css';
import React from "react";
import goo from "./component/googleSignIn";
import kakao from "./component/kakaoSignIn";
import signUp from "./component/signUp";

function App() {
  return(
    <div>
      {/* {kakao()} */}
      {/* {goo()} */}
      {signUp()}
    </div>
  )
}

export default App;

/*const GoogleApiPOST = (token) => {
  axios
    .get(`${socialLoginAPI}/user/google`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      sessionStorage.setItem("token", res.data.token);
      alert("로그인 되었습니다");
      //history.push("/home");
    })
    .catch((error) => alert("Error가 발생하였습니다", error));
};

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
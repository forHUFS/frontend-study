import React from "react";
import { useState, useEffect, useHistory , useRef} from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';

function App() {
  const googleLoginBtn = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    googleSDK();
  }, []);


//SDK 초기 설정 및 내 API초기화
const googleSDK = () => {
    window.googleSDKLoaded = () => {
      console.log(window.gapi);
      window.gapi.load("auth2", () => {
        const auth2 = window.gapi.auth2.init({
          client_id:
            "13311386829-vlj3ciu02fu1tqriq8dqo0a3nsm4f90u.apps.googleusercontent.com",
          scope: "profile, account_email, gender, birthday",
        });
        //버튼 클릭시 사용자 정보 불러오기
         auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          (googleUser) => {
            const profile = googleUser.getBasicProfile();
            console.log(profile);
            console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            console.log(`ID: ${profile.getId()}`);
            console.log(`Name: ${profile.getName()}`);
            console.log(`Image URL: ${profile.getImageUrl()}`);
            console.log(`Email: ${profile.getEmail()}`);
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      });
    };
   //구글 SDK 불러오기
       (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  const loginWithGoogle = () => {
    window.gauth.login({
        success: function (authObj) {
            fetch(`http://52.78.2.40:8080/user/sign-in/google`, {
                method: "GET",
                
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                //localStorage.setItem("Kakao_token", res.access_token);
                if (res.code === 200) {
                    alert("Sign in Successfully!");
                    //history.pushState("/");
                } else {
                    alert("Wrong information, or you're not member");   
                }
            });
        },
    });
  
   return (
    // <GoogleBtn id="gSignInWrapper">
    <button>
      <span class="label" />
      <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
        <span className="icon"></span>
        <span className="buttonText">Login with Google</span>
      </div>
    </button>
      
    // </GoogleBtn>
  );
}
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
};*/
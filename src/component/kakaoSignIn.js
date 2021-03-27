import React from "react";
// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
//import styled from "styled-components";
import loginPic from "./SigninStyles/kakao_login_medium_narrow.png";
import { useEffect } from "react";
//import resources from './kakaoResource';
 
// function KakaoLogin() {
//     const { Kakao } = window;
//     const history = useHistory();

//     // GET /oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code HTTP/1.1
//     // Host: kauth.kakao.com
//     Kakao.init("690082dcedf6efeca17e320160913cb3");
//     Kakao.Auth.createLoginButton()
//     const loginWithKakao = () => {
//         Kakao.Auth.login({
//             success: function (authObj) {
//                 fetch(`localhist:3000/user/sign-in`, {
//                     method: "GET",
//                     headers: {
//                         Autorization: authObj.access_token,
//                     },
//                 })
//                 .then((res) => res.json())
//                 .then((res) => {
//                     console.log(res.code);
//                     localStorage.setItem("Kakao_token", res.access_token);
//                     if (res.code === 200) {
//                         alert("Sign in Successfully!");
//                         history.push("/");
//                     } else {
//                         alert("Wrong information, or you're not member")
                        
//                     }
//                 });
//             },
//         });
//     };

//     return (
//         <button onClick={() => loginWithKakao()} value="카카오 로그인">
//             {/* <img className="loginBtn" alt="kakaoLogin" src={loginPic} /> */}
            
//         </button>
//         //<KakaoBtn onClick={() => loginWithKakao()}>
            
//         //</KakaoBtn>
//     )
// }

// export default KakaoLogin;

//window.kakao.init("690082dcedf6efeca17e320160913cb3");

function kakaoLogin() {

    // const KakaoInit = () => {
    //     window.Kakao.init('690082dcedf6efeca17e320160913cb3');
    // };

    // const Login = () => {
    //     useEffect(() => {
    //         KakaoInit();
    //     }, []);
    // }

    // window.Kakao.Auth.authorize({
    //     redirectUri: 'http://localhost:3000/user/kakao/callback'
    // })

    window.Kakao.init('690082dcedf6efeca17e320160913cb3');
    window.Kakao.Auth.login({
        scope: 'profile, account_email, gender',
        success: function(authObj) {
            console.log(authObj);
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                }
            })
        },
        fail: (err) => {
            console.error(err)
        }
    });
    return (
        <div>
            <a href="javascript:kakaoLogin():"></a>
        </div>
    )
}

export default kakaoLogin;
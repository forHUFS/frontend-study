import React from "react";
import { Modal, Button, Form, Container } from 'react-bootstrap';
import {GoogleLogin } from 'react-google-login';
import kakaoLogin from "../kakaoSignIn";

const SignUpModal = ({show, onHide}) => {
    return (
        <div>
            <GoogleLogin />
            {kakaoLogin()}

            <button>닫기</button>
        </div>

    )
}

export default SignUpModal;


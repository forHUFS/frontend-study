import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import SignUpModal from './modals/signUPModal';
import SignInModal from './modals/signInModal';


const SignUp = () => {
    
    const [signInModalOn, setSignInModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [value, setValue] = useState(false);
    const [signInT, setSignIn] = useState(false);

    const handleState = (e) => {
        if(signInT) {
            setSignIn(true);
            setValue("signOut");
        } else {
            setSignIn(false);
            setValue("signIn")
        }
    }
    return (
        <div>
            <SignInModal
            show={signInModalOn}
            onHide={() => setSignInModalOn(false)} />
            <SignUpModal
            show={signUpModalOn}
            onHide={() => setSignUpModalOn(false)}
            />
            <Button variant="primary" onClick={()=>setSignInModalOn(true)}>
                Sign In
            </Button>
            
            <Button
                variant="secondary"
                onClick={() => setSignUpModalOn(true)}>
                Sign Up
            </Button>
        </div>
    )
}
export default SignUp;
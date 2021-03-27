import React from "react";
import { Modal, Button, Form, Container } from 'react-bootstrap';
import {GoogleLogin } from 'react-google-login';

const SignUpModal = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Container>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control placeholder="이름을 입력하세요" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>랄라</Form.Label>
                    <Form.Control type="email" placeholder="웹메일/지메일(G-suite) 입력하세요" />
                    <Form.Text className="text-muted">
                    위 메일로 인증 메일이 보내집니다. 인증까지는 최대 24시간이 소요됩니다.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호" />
                    <Form.Text className="text-muted">
                    비밀번호는 숫자, 영문자, 특수문자의 조합으로 만들어주세요
                    </Form.Text>
                </Form.Group> */}

                {/* { <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> } */}
                <Button block variant="info" type="submit">
                    로그인
                </Button>
                {/* <GoogleLogin
                    render={renderProps=> {
                        return 
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}
                        style={{backgroundColor:"#176BEF",borderColor:"#176BEF"}}>
                            <i className="fab fa-google"></i>Sign up with Google
                        </Button>
                    }}
                /> */}
            </Form>  
            </Modal.Body>
            <Modal.Footer>
                {/* <GoogleLogin
                    render={renderProps=> {
                        return 
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}
                        style={{backgroundColor:"#176BEF",borderColor:"#176BEF"}}>
                            <i className="fab fa-google"></i>Sign up with Google
                        </Button>
                    }}
                /> */}
                {/* <GoogleLogin /> */}
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Container>
        </Modal>
    )
}

export default SignUpModal;


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

                <Form.Group controlId="formBasicNickname">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control placeholder="닉네임을 입력하세요" />
                    <Form.Text className="text-muted">
                    선택사항입니다.
                    </Form.Text>
                </Form.Group>
                
                {/* <Form.Label>전공</Form.Label> */}
                <Form.Group controlId="formBasicMajor">
                    <Form.Label>1전공</Form.Label>
                    <Form.Control placeholder="1전공을 입력하세요" />
                </Form.Group>
                <Form.Group controlId="formBasicMinor">
                    <Form.Label>이중전공</Form.Label>
                    <Form.Control placeholder="이중전공/부전공을 입력하세요" />
                </Form.Group>
                <Form.Text className="text-muted">
                    전공 변경은 한 번만 가능합니다. 정확하게 입력해주세요.
                </Form.Text>
                

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>메일</Form.Label>
                    <Form.Control type="email" placeholder="웹메일/지메일(G-suite) 입력하세요" />
                    <Form.Text className="text-muted">
                    위 메일로 인증 메일이 보내집니다. 인증까지는 최대 24시간이 소요됩니다.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                </Form>
            {/* <GoogleLogin /> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Container>
        </Modal>
    )
}

export default SignUpModal;
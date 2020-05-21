import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button"; //https://react-bootstrap.github.io/
import Form from "react-bootstrap/Form"; //https://react-bootstrap.github.io/

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
            .string()
            .required("Password is required")
            .min(4, "Password needs to contain a minimum of 4 characters") //https://github.com/jquense/yup#stringensure-schema
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data:", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
                {errors.username && <p>{errors.username.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" ref={register} />
                {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button type="submit">Login</Button>
        </Form>
    );
}

export default LoginForm;

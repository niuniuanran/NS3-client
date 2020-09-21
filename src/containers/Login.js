import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import {useFormFields} from "../libs/hooksLib";
import { useAppContext } from "../libs/contextLib";
import "./Login.css";
import LoaderButton from "../components/LoadButton";
import { onError } from "../libs/errorLib";

export default function Login() {
    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [formFields, setFormFields] = useFormFields({email: "", password: ""});

    function validateForm() {
        return formFields.email.length > 0 && formFields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        try {
            await Auth.signIn(formFields.email, formFields.password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            onError(e.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={formFields.email}
                        onChange={e => setFormFields({email: e.target.value})}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={formFields.password}
                        onChange={e => setFormFields({password: e.target.value})}
                        type="password"
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
            </form>
        </div>
    );
}
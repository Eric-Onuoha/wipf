import React from "react";
import { useState } from "react";
import { signIn } from "./signIn.firebase.utils";
import { useNavigate } from "react-router-dom";
import "./authenticator.styles.scss";

const Authenticator = () => {
    const navigate = useNavigate();

    const defaultFormFields = {
        email:"",
        password:"",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        try{
            const {user} = await signIn(email, password);
            navigate("/admin/cms");
        } catch(error){
            console.log(error);
        }

    }

    return(
        <div id="aunthenticatorComponent">
            <h1>Sign In as WIPF admin</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                <button type="submit">Login</button>
                <p>Don't have an account? Find an existing account holder to help you create one</p>
            </form>
        </div>
    )
};

export default Authenticator;
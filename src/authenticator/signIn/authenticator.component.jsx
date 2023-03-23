import React from "react";
import { useState } from "react";
import { signIn } from "./signIn.firebase.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../reduxStore/actionDispatches";
import "./authenticator.styles.scss";

const Authenticator = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            dispatch(addCurrentUser(user.email))
            navigate("/admin/cms");
        } catch(error){
            alert(error.message);
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
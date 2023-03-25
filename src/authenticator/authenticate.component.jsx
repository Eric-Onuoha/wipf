import React from "react";
import Authenticator from "./signIn/authenticator.component";

const Authenticate = ({component: Component, user}) => {
    alert(user);
    return(
        <div>
        { user ? (
            <Component/>
        ) : (
            <Authenticator/>
        )}
        </div>
    )
}; export default Authenticate;
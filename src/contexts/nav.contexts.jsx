import { createContext } from "react";
import { useContext, useState } from "react";

export const NavContext = createContext({
    currentPage: "Hello",
    setCurrentPage: () => null,
    isAdmin: false,
    setIsAdmin: () => null
});

export const NavProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState("Hello");
    const value = {currentPage, setCurrentPage};
    
    return(
        <NavContext.Provider value={value}>{children}</NavContext.Provider>
    )
}
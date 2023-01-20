import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider({children}){

    const [ token, setToken ] = useState('');
    const [user, setUser ] = useState({
        email: "",
        password: "",
    })
 
    return(
        <AppContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </AppContext.Provider>
    )
}
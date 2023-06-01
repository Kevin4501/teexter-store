import { createContext, useState } from "react";


export const Context= createContext();

const ContextProvider=({children})=>{
    const [cartProduct, setCartProduct] = useState([]);
    return(
        <Context.Provider value={{cartProduct, setCartProduct}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
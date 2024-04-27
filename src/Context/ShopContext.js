import React from 'react'
import all_product from "../Components/Assets/all_product"
import { getValue } from '@testing-library/user-event/dist/utils';
import { createContext } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=> {
  
    const contextvalue = {all_product};
    return(
        <ShopContext.Provider value ={contextvalue}>
        {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider;
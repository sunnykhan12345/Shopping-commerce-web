import React, { createContext } from 'react'
import all_products from '../All_Products';

 export const ShopContext = createContext();

    const ShopContextProvider = (props) =>{
          const ShopValue = {all_products};
          return(
            <ShopContext.Provider value={ShopValue}>
                    {props.children}
          </ShopContext.Provider>
          )
    }


    export default ShopContextProvider;

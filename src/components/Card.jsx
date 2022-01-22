import React, { createContext, useEffect, useReducer } from 'react'
import ContextCart from './ContextCart';
import { products } from './porducts';
import { reducer } from './reducer';

export const CartContext = createContext();

    const initialState  = {
        item: products,
        totalAmount: 0,
        totalItem: 0,
    };

    
    const Card = () => {
        
        const [state, dispatch] = useReducer(reducer, initialState);

        const removeItems = (id) =>{
            return dispatch({
                type: "REMOVE_ITEMS",
                payload: id,
            }) 
        };

        
        const clearCart = () =>{
            return dispatch({ type: "CLEAR_CART" })
        }

        const increment = (id) =>{
            return dispatch({ 
                type: "INCREMENT",
                payload: id,
            })
        }

        const decrement = (id) =>{
            return dispatch({ 
                type: "DECREMENT",
                payload: id,
            })
        }


        useEffect(()=>{
            dispatch({type: "GET_TOTAL" });
            console.log("hello")
        },[state.item]);

        
    return (
        <>
        <CartContext.Provider value={{...state, removeItems, clearCart, increment, decrement }}>
        <ContextCart/>
        </CartContext.Provider>
        </>
    )
}

export default Card;

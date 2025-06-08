import { createContext, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

import { createContext, useContext } from "react";

const CartContext = createContext();

const loadInitalState = () => {
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem("cart");

        try {
            const parsed = saved ? JSON.parse(saved) : null;
            if (parsed && Array.isArray(parsed.items)) return parsed;
            return { items: [] }
        } catch {
            return { items: [] }
        }
    }
    return { items: [] }
}

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

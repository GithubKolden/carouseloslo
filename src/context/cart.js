import { createContext } from "react";

const CartStateContext = createContext()
const CarrtDispatchContect = createContext()

const SET_CART = "SET_CART";

const initialState = {
    total_items: 0,
    total_unique_items: 0,
    line_items: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_CART:
            return { ...state, ...action.payload}
            default:
                throw new Error(`Unknown action: ${action.type} `);
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getCart = async () => {
        try{
            const cart = await commerce.cart.retrieve()
        }
    }
}
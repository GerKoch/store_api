import { useContext } from "react";
import { CartContext } from "../Contexts/ShoppingCartContext";


export const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext);   

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);   

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.prod.price
    }, 0);

    return (
        <div>
            <div>Items in cart: {quantity}</div>
            <div>Total: ${totalPrice}</div>
            <button onClick={() => console.log(cart)}>Checkout</button>
        </div>
        
    )
}
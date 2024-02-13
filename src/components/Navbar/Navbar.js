import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/ShoppingCartContext";

const Navbar = () => {
    const [cart, setCart] = useContext(CartContext);   

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);    
 

    const navStyles = {
        color: "#fff",
        listStyle: "none",
        textDecodation: "none",
    };

    return (
        <nav className="NavContainer">
            <Link to={"/"} style={navStyles}>
                <h1 className="title">Store</h1>
            </Link>
            <ul>
                <Link to={"/cart"} style={navStyles}>
                    <li>
                        Cart items: <span className="cart-count">{quantity}</span>
                    </li>
                </Link>

            </ul>
        </nav>
    )
}

export default Navbar;
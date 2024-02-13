import "./CardProducts.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../Contexts/ShoppingCartContext";


const CardProducts = ({ prod, AgregarAlCarro }) => {

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.prod.id === prod.id);
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item.prod.id === prod.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { prod, quantity: 1, price: prod.price }];
            }
        });
    }

    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item.prod.id === prod.id)?.quantity === 1) {
                return currItems.filter((item) => item.prod.id !== prod.id);
            } else {
                return currItems.map((item) => {
                    if (item.prod.id === prod.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.prod.id === prod.id)?.quantity || 0;
    }

    const quantityPerItem = getQuantityById(prod.id);

    return (
        <div className="container">
            {
                quantityPerItem > 0 && (
                    <div>{quantityPerItem}</div>
                )
            }

            <p>{prod.title}</p>
            <img alt={prod.id} src={prod.image} />
            <hr />
            <p>${prod.price}</p>
            {quantityPerItem === 0 ? (
                <Button onClick={() => addToCart()}>
                    Add tocart
                </Button>
            ) : (
                <Button onClick={() => addToCart()}>
                    + add more
                </Button>
            )
            }
            {quantityPerItem > 0 && (
                <Button onClick={() => removeItem(prod.id)}>
                    subtract item
                </Button>
            )

            }
        </div>
    )
}

export default CardProducts;
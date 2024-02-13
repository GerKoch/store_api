import { useState, useEffect } from "react";
import CardProducts from "../components/CardProducts/CardProducts";
import "./Products.css";

const Products = () => {

    const apiUrl = "https://fakestoreapi.com/products";

    const [prods, setProds] = useState([]);
    const [search, setSearch] = useState("");
    const [showProds, setshowProds] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setProds(res);
                setshowProds(res);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
        filtered(e.target.value);
        //console.log(e.target.value);
    }

    const filtered = (searchTerm) => {
        const searchResult = prods.filter(element => {
            if (element.title
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
                return element;
            }
        });
        setshowProds(searchResult);
    }
   
    const [dataCart, setDataCart] = useState([]);
    console.log("cartita", dataCart);

    const AgregarAlCarro = (product) => {
        setDataCart([...dataCart, product]);
    }

    return (
        <div>
            <div className="container_input">
                <div>
                    <input className="input"
                        placeholder="Buscar"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="prod">
                {loading && <p>loading...</p>}
                {showProds.length > 0 &&
                    !loading &&
                    showProds.map(prod =>
                        <CardProducts
                            key={prod.id}
                            prod={prod}
                            AgregarAlCarro={AgregarAlCarro}
                        />
                    )}
            </div>
        </div>
    )
}

export default Products;
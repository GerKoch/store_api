import { useState, useEffect } from 'react';
import CardProducts from '../CardProducts/CardProducts';
import './Styles.css';

const Products = () => {

    const api = `https://fakestoreapi.com/products`;

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [prods, setProds] = useState([]);

    const [state, setState] = useState("");

    useEffect(() => {
        fetch(api)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setProducts(resp);
                setProds(resp);
            })
            .catch(error => console.log(error));
    }, [])

    const carro = [
        // setProducts()
    ];

    const agregarAlCarro = (products) => {
        console.log(products)
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        filtered(e.target.value);
        console.log(e.target.value);
    }

    const filtered = (searchterm) => {
        const searchResult = prods.filter(element => {
            if (element.title.toString().toLowerCase().includes(searchterm.toLowerCase())) {
                return element;
            }
        });
        setProducts(searchResult);
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
            <div className='prod'>
                {products.length > 0 &&
                    products.map(prod =>
                        <CardProducts
                            key={prod.id}
                            image={prod.image}
                            title={prod.title}
                            price={prod.price}
                            agregarAlCarro={agregarAlCarro}
                        />
                    )}
            </div>
        </div>

    )
}

export default Products;
import { useState, useEffect } from 'react';
import CardProducts from '../../components/CardProducts/CardProducts';
import './Styles.css';



const Products = () => {

    const api = `https://fakestoreapi.com/products`;

    const [showproducts, setShowProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(api)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setShowProducts(resp);
                setProds(resp);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [])


    const handleChange = (e) => {
        setSearch(e.target.value);
        filtered(e.target.value);
        console.log(e.target.value);
    }

    const filtered = (searchterm) => {
        const searchResult = prods.filter(element => {
            if (element.title
                    .toString()
                    .toLowerCase()
                    .includes(searchterm.toLowerCase())
            ) {
                return element;
            }
        });
        setShowProducts(searchResult);
    }

    const [dataCart, setDataCart] = useState([]);

    console.log("gerCart", dataCart);

    const agregarAlCarro = (product) => {
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
            <div className='prod'>
                {loading && <p>loading...</p>}
                {showproducts.length > 0 &&
                    !loading &&
                    showproducts.map(prod =>
                        <CardProducts
                            key={prod.id}
                            image={prod.image}
                            title={prod.title}
                            price={prod.price}
                            data={prod}
                            agregarAlCarro={agregarAlCarro}
                        />
                    )}
            </div>
        </div>

    )
}

export default Products;
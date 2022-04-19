import { prettyDOM } from '@testing-library/react';
import { useState, useEffect } from 'react';
import CardProducts from '../CardProducts/CardProducts';
import './Styles.css';

const Products = () => {

    const api = `https://fakestoreapi.com/products`;

    const [products, setProducts] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [prods, setProds] = useState([]);


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

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        const resultadoBusqueda = prods.filter(element => {
            if(element.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return element;
            }
        });
        setProducts(resultadoBusqueda);
    }


    return (
        <div>
            <div className="container_input">
                <input className="input"
                    placeholder="Buscar"
                    value={busqueda}
                    onChange={handleChange}
                />
            </div>
            <div className='prod'>
                {products.length > 0 &&
                    products.map(prod =>
                        <CardProducts
                            key={prod.id}
                            image={prod.image}
                            title={prod.title}
                            price={prod.price}
                        />
                    )}
            </div>
        </div>

    )
}

export default Products;
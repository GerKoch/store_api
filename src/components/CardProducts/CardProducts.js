import './CardProducts.css';
import Button from '../../components/Button/Button';

const CardProducts = ({ id, image, title, price, agregarAlCarro, data }) => {
    return(
        <div className="container">
            <p>{title}</p>
            <img alt={id} src={image} />
            <hr />
            <p>{price}</p>   
            <Button onClick={() => agregarAlCarro(data)}>
                Agregar al carro
            </Button>  
        </div>
    )
}

export default CardProducts;
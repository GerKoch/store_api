import './CardProducts.css';

const CardProducts = ({ id, image, title, price }) => {
    return(
        <div className="container">
            <p>{title}</p>
            <img alt={id} src={image} />
            <hr />
            <p>${price}</p>           
        </div>
    )
}

export default CardProducts;
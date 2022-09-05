import './Carro.css';
import img from '../../images/manzana_roja.jpg';
import img2 from '../../images/banana.jpg';
import img3 from '../../images/naranja.jpg';


const Carro = () => {
    return (
        <div className='carritos show'>
            <div className='carrito show'>
                <div className='carrito__close'>
                    <span>X</span>
                </div>
                <h2>Su carrito</h2>
                <div className='carrito__center'>

                    <div className='carrito__item'>
                        <img src={img} alt="" />
                    </div>
                    <div className='carrito__item'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='carrito__item'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carro;
import './Carro.css';
import BubbleAlert from '../BubbleAlert/BubbleAlert';

const Carro = () => {
    return(
        <div>
            <span className='bubble'>
                <BubbleAlert value={10}/>
            </span>
            <button className='carro'>Carro</button>
        </div>
    )
}

export default Carro;
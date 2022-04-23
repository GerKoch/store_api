import './Navbar.css';
import Carro from '../Carro/Carro';

const Navbar = () => {
    return(
        <div className="navContainer">
            <h1 className='title'>Fake Store API</h1>
            <Carro />
        </div>
    )
}

export default Navbar;
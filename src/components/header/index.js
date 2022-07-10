import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../Providers/cart';
import './style.css';

function Header(){

const { cart } = useContext(CartContext);

const navigate = useHistory();

const handleClick = () =>{
   navigate.push("/carrinho");
}
const handleClick2 = () =>{
    navigate.push("/");
 }

    return(
        <>
        <header>
            <h1 className='h3'>Kenzie Shop</h1>
            <nav className='botoes'>
                {cart.length >= 1 ? <span className='bola'>{cart.length}</span>:""}
                <button onClick={handleClick}>Carrinho</button>
                <button onClick={handleClick2}>Loja</button>
            </nav>
        </header>
        </>
    )
}

export default Header;
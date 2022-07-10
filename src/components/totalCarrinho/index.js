import { useContext } from 'react';
import { CartContext } from '../../Providers/cart';
import './style.css';

function TotalCarrinho(){

  const { cart } = useContext(CartContext);

  console.log(cart)

  return (
    <>
        <div className="container_total">
            <h3>Resumo do pedido</h3>
            <div className="container_info">
                <span>{cart.length} Produtos</span>
                <span className='totalValor'>R$ {cart.reduce((acumula, entrada) => {
                    acumula += entrada.price
                return acumula;},0)}</span>
            </div>
            <button>Finalizar Pedido</button>
        </div>
    </>
  );
};

export default TotalCarrinho;
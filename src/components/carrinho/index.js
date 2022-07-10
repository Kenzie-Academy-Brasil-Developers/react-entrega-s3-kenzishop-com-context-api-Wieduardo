import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import TotalCarrinho from "../totalCarrinho";
import './style.css';

function Carrinho(){

  const { cart, removeFromCart } = useContext(CartContext);

  function handleclick(index){
    removeFromCart(index);
  };

  console.log(cart)

  return (
    <>
      <div className="vitrine_carrinho">
        <div className="display_carrinho">
        <div className="info_carrinho"><span>Produto</span><span>Preço</span></div>
        {cart.map((fruit, index) => (
        <div key={index} className="carrinho_card">
          <img src={fruit.image} alt="alterna"></img>
            <p>{fruit.name}</p>
            <button onClick={() => handleclick(index)}>Remover</button>
            <span>R$ {fruit.price}</span>
        </div>))
        }
        </div>
        <TotalCarrinho/>
      </div>
    </>
  );
};

export default Carrinho;
import { useContext } from "react";
import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";
import './style.css';

function FrutasLoja(){

  const { cart, addToCart } = useContext(CartContext);

  const { catalogue } = useContext(CatalogueContext);

  function handleclick(input){
    addToCart(catalogue[input]);
  };

  console.log(cart)

  return (
    <>
      <div className="vitrine">
        {catalogue.map((fruit, index) => (
        <div key={index} className="produto_card">
          <img src={fruit.image} alt="alterna"></img>
          <div className="produto_content">
            <p>{fruit.name}</p>
            <span>R$ {fruit.price}</span>
            <button onClick={() => handleclick(index)}>Adicionar ao carrinho</button>
          </div>
        </div>))
        }
      </div>
    </>
  );
};

export default FrutasLoja;
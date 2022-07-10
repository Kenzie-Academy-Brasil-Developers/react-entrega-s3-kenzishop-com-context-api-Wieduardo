import './App.css';
import { CatalogueProvider } from './Providers/catalogue';
import { CartProvider } from './Providers/cart';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <Routes/>
        </CartProvider>
     </CatalogueProvider>
    </div>
  );
}

export default App;

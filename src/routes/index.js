import { Route, Switch } from "react-router-dom";
import Carrinho from "../components/carrinho";
import Header from "../components/header";
import FrutasLoja from "../components/produtos";

function Routes(){
    
    return(
        <>
        <Switch>
            <Route exact path="/carrinho">
                <Header/>
                <Carrinho/>
            </Route>
            <Route exact path='/'>
                <Header/>
                <FrutasLoja/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes;
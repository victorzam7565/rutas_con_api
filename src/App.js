import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotro from './components/Nosotro';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>    
    <div className="container mt-5" >
      <div className= "btn-group">
        
<NavLink to="/Contacto" className = "btn btn-dark "  activeClassName="active">
       Contacto
</NavLink>
<Link to = "/Nosotro" className = "btn btn-dark">
  Nosotros
</Link>
 <Link to= "/" className = "btn btn-dark">
             Inicio
         </Link>
      </div>
<hr/>
<Switch>
   <Route path ="/Contacto">
     <Contacto/>
   </Route>
<Route path="/Nosotro">
   <Nosotro/>
</Route>
<Route path ="/" exact>
 <Inicio/>
</Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;

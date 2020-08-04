import React from 'react';
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  
  Route,
  Switch,
} from 'react-router-dom';
import Products from './Products';
import Add_Products from './Add_Products';
import Cart from './Cart';
/**
 * Create Router and display views according to routes
 */
class App extends React.Component{
  render(){
    
    return(
      
      <div className="App">
        
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/Products">
            
              <Products />

            </Route>
            <Route exact path="/Add-Product">
              <Add_Products></Add_Products>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </Router>
      </div>
      
    )
  }
}

export default App;

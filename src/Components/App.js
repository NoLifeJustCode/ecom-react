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
import APIUrls from '../helper/APIUrls';
import { connect } from 'react-redux';
import {setProducts} from '../actions/ProductsAction'
/**
 * Create Router and display views according to routes
 */
class App extends React.Component{
  componentDidMount(){
    fetch(APIUrls.add_products)
      .then(response=>response.json())
      .then(json=>{
        this.props.dispatch(setProducts(json));
      })
  }
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
function mapStateToProps(state){
  return{

  }
}
export default connect(mapStateToProps)(App);

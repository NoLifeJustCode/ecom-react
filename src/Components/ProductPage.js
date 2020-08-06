import React from 'react'
import { withRouter } from 'react-router-dom'
import {connect } from 'react-redux'
import {Rating} from './Product'
import {ADD_CART_PRODUCT} from '../actions/ProductsAction'
/**
 * Products page showing details of products
 * @param {*} props 
 */
function ProductPage(props){
    
    const {product}=props.location.state
     function addToCart(e){
        e.stopPropagation();
        props.dispatch(ADD_CART_PRODUCT(product))
    }
    return (
        
        <div className="product">
            <div className="left">
                    <img className="avatar" src={product.avatar} alt="avatar"></img>
            </div>
            <div className="right">
                <div className="product-name">
                        {product.product_name}
                </div>
                <div className="product-price">
                        {product.product_price}
                </div>
                <div className="product-rating">
                    <Rating rating={product.rating}/>
                </div>
                <div className="product-description">
                        {product.product_description}
                </div>
                <button onClick={addToCart} className="addtocart" >Add To Cart</button>
            </div>
        </div>
    )
}
// to extract dispatch
function mapStateToProps (state){
    return {}
}
export default withRouter( connect(mapStateToProps)(ProductPage));
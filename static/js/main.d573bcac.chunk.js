(this.webpackJsonpecom_react=this.webpackJsonpecom_react||[]).push([[0],{34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),s=a.n(c),o=(a(39),a(40),a(41),a(4)),i=a(5),u=a(7),d=a(6),l=a(33),p=a(15),m=a(9),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"NavBar"},n.a.createElement("div",{className:"left"},n.a.createElement(p.b,{to:"/ecom-react/Products"},n.a.createElement("div",{className:"nav-link"}," Products")),n.a.createElement(p.b,{to:"/ecom-react/Add-Product"},n.a.createElement("div",{className:"nav-link"},"Add product"))),n.a.createElement("div",{className:"right"},n.a.createElement(p.b,{to:"/ecom-react/cart"},n.a.createElement("div",{className:"nav-link"},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/3225/3225200.svg",alt:"Cart"}),n.a.createElement("sup",null,this.props.cartQty)))))}}]),a}(n.a.Component);var v=Object(m.b)((function(e){var t,a=0,r=Object(l.a)(e.products.cart);try{for(r.s();!(t=r.n()).done;){a+=t.value.qty}}catch(n){r.e(n)}finally{r.f()}return{cartQty:a}}))(f),h=a(3),b=a(8),E=a.n(b),O=a(16),j="https://my-json-server.typicode.com/".concat("nolifejustcode","/").concat("db","/products"),g=j,y="https://my-json-server.typicode.com/".concat("nolifejustcode","/").concat("db","/carts"),N={add_products:j,delete_products:g,add_cart_products:y,delete_cart_products:y,update_quantity:y,get_products:j};function _(e){return function(){var t=Object(O.a)(E.a.mark((function t(a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={method:"DELETE",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t.next=4,fetch(N.delete_products+"/"+e.id,r).then((function(e){return e.json()}));case 4:t.sent,a(P(e.id)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function R(e){return function(){var t=Object(O.a)(E.a.mark((function t(a){var r,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.rating>5?e.rating=5:e.rating<0&&(e.rating=0),t.prev=1,r={method:"PUT",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t.next=5,fetch(N.add_products+"/"+e.id,r).then((function(e){return e.json()}));case 5:n=t.sent,a(D(n)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}function T(e){return function(){var t=Object(O.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a(S(e))}catch(r){console.log(r)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function C(e,t){return function(){var a=Object(O.a)(E.a.mark((function a(r){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(t.qty+e>=1)){a.next=4;break}t.qty+=e,a.next=6;break;case 4:return r(U()),a.abrupt("return");case 6:try{r({type:"UPDATE_QUANTITY",cart:t})}catch(n){console.log(n)}case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function k(e){return function(){var t=Object(O.a)(E.a.mark((function t(a,r){var n,c,s,o,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r(),t.prev=1,-1===n.products.cart.findIndex((function(t){return t.product.id===e.id}))){t.next=5;break}return a(U()),t.abrupt("return");case 5:return c={product:e,qty:1,totalCost:e.product_price},s={method:"POST",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(c)},t.next=9,fetch(N.add_cart_products,s);case 9:if(201!==(o=t.sent).status){t.next=18;break}return t.next=13,o.json();case 13:i=t.sent,e=i,a(w(i)),t.next=19;break;case 18:a(U());case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e,a){return t.apply(this,arguments)}}()}function H(){return function(){var e=Object(O.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N.get_products).then((function(e){return e.json()}));case 2:a=e.sent,t({type:"RESET_FILTER",products:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(){return function(){var e=Object(O.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(201!=={status:201}.status){e.next=3;break}return e.abrupt("return",t({type:"CLEAR_CART",message:"Order placed Successfully"}));case 3:return e.abrupt("return",U("Order cannot be placed"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function A(e){return{type:"ADD_PRODUCTS",product:e,message:"Product Added"}}function P(e){return{type:"DELETE_PRODUCTS",id:e,message:"Product deleted "}}function D(e){return{type:"UPDATE_PRODUCTS",product:e,message:"product updated"}}function S(e){return{type:"DELETE_CART_PRODUCTS",id:e,message:"product removed from cart"}}function w(e){return{type:"ADD_PRODUCT_CART",cart:e,message:"Added to cart "}}function U(e){return{type:"DEFAULT",message:e}}var I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).saveHandler=function(e){var t={id:n.props.product.id,product_name:n.nameRef.current.value,product_price:n.priceRef.current.value,rating:n.ratingRef.current.value,product_description:n.descriptionRef.current.value};n.props.saveHandler(t)},n.resetHandler=function(e){n.props.resetHandler(e)},n.nameRef=Object(r.createRef)(),n.priceRef=Object(r.createRef)(),n.ratingRef=Object(r.createRef)(),n.descriptionRef=Object(r.createRef)(),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.avatar,a=e.rating,r=e.product_description,c=e.product_name,s=e.product_price;return n.a.createElement("div",{className:"product-container"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:t,alt:"avatar"})),n.a.createElement("div",{className:"product-details"},n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"product-name"},n.a.createElement("input",{type:"text",ref:this.nameRef,defaultValue:c})),n.a.createElement("div",{className:"product-price"},n.a.createElement("input",{type:"Number",ref:this.priceRef,defaultValue:s}))),n.a.createElement("div",{className:"bottom"},n.a.createElement("input",{type:"number",defaultValue:a,ref:this.ratingRef})))),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"description"},n.a.createElement("textarea",{ref:this.descriptionRef,defaultValue:r})),n.a.createElement("div",{className:"options"},n.a.createElement("div",{className:"icon",onClick:this.saveHandler},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/907/907027.svg",alt:"save"})),n.a.createElement("div",{className:"icon",onClick:this.resetHandler},n.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2919/2919590.svg",alt:"cancel"})))))}}]),a}(n.a.Component),L=a(21),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handler=r.handler.bind(Object(L.a)(r)),r}return Object(i.a)(a,[{key:"handler",value:function(e){e.stopPropagation(),e.preventDefault(),this.props.handler&&this.props.handler(e)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return n.a.createElement("div",{className:"icon",onClick:this.handler},n.a.createElement("img",{src:t,alt:a,style:this.props.style}))}}]),a}(n.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).editHandler=function(t){e.props.editHandler(t)},e.deleteHandler=function(t){e.props.deleteHandler(e.props.product.id)},e.addToCart=function(t){t.stopPropagation(),e.props.dispatch(k(e.props.product))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.avatar,a=e.rating,r=e.product_description,c=e.product_name,s=e.product_price,o=this.props,i=o.hideAddToCart,u=o.hideEditOptions;return n.a.createElement("div",{className:"product-container"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:t,alt:"avatar"})),n.a.createElement("div",{className:"product-details"},n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"product-name"},c),n.a.createElement("div",{className:"product-price"},s)),n.a.createElement("div",{className:"bottom"},n.a.createElement(V,{rating:a})))),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"description"},r),n.a.createElement("div",{className:"options"},!i&&n.a.createElement("button",{onClick:this.addToCart},"Add To Cart"),!u&&n.a.createElement(q,{handler:this.editHandler,src:"https://image.flaticon.com/icons/svg/715/715750.svg",alt:"edit"}),!u&&n.a.createElement(q,{handler:this.deleteHandler,src:"https://image.flaticon.com/icons/svg/1214/1214428.svg",alt:"delete"}))))}}]),a}(n.a.Component),Q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).editHandler=function(e){r.setState((function(e){return{edit:!0}}))},r.deleteHandler=function(e){r.props.deleteHandler&&r.props.deleteHandler(e)},r.saveHandler=function(e){r.props.saveHandler&&r.props.saveHandler(e),r.resetHandler()},r.resetHandler=function(){r.setState((function(e){return{edit:!1}}))},r.state={edit:!1,hideOptions:!1},r}return Object(i.a)(a,[{key:"render",value:function(){var e={editHandler:this.editHandler,deleteHandler:this.deleteHandler,saveHandler:this.saveHandler,resetHandler:this.resetHandler,product:this.props.product,dispatch:this.props.dispatch,hideAddToCart:this.props.hideAddToCart,hideEditOptions:this.props.hideEditOptions};return n.a.createElement("div",{className:"products-display"},!this.state.edit&&n.a.createElement(p.b,{to:{pathname:"/ecom-react/Product",state:{product:e.product}}},n.a.createElement(J,e)),this.state.edit&&n.a.createElement(I,e))}}]),a}(n.a.Component);function V(e){var t=e.rating;t>5?t=5:t<0&&(t=0);var a=16*t+"px";return n.a.createElement("span",{className:"stars"},n.a.createElement("span",{style:{width:a}}))}var F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).deleteHandler=function(t){e.props.dispatch(_({id:t}))},e.saveHandler=function(t){e.props.dispatch(R(t))},e.sortHandler=function(){e.props.dispatch({type:"SORT_PRODUCTS"})},e.reset=function(){e.props.dispatch(H())},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products.products;return n.a.createElement("div",null,n.a.createElement("div",{className:"product-filters"},n.a.createElement("div",{className:"filter"},n.a.createElement("button",{onClick:this.sortHandler},"sort"),n.a.createElement("button",{onClick:this.reset},"X"))),n.a.createElement("div",{className:"productsList"},t.map((function(t,a){return n.a.createElement(Q,{product:t,deleteHandler:e.deleteHandler,saveHandler:e.saveHandler,dispatch:e.props.dispatch,key:a})}))))}}]),a}(n.a.Component),B=Object(m.b)((function(e){return{products:e.products}}))(F),M=a(2),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addProduct=function(e){e.preventDefault();var t={product_name:n.nameRef.current.value,product_price:n.priceRef.current.value,rating:n.ratingRef.current.value,product_description:n.descriptionRef.current.value};""===t.product_name||""===t.product_description||t.product_price<0||t.rating<0||t.rating>5?console.log("Invalid data formats"):(n.props.dispatch(function(e){return function(){var t=Object(O.a)(E.a.mark((function t(a){var r,n,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={method:"POST",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t.next=4,fetch(N.add_products,r);case 4:if(201!==(n=t.sent).status){t.next=11;break}return t.next=8,n.json();case 8:c=t.sent,e=c,a(A(c));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.target.reset())},n.nameRef=Object(r.createRef)(),n.priceRef=Object(r.createRef)(),n.ratingRef=Object(r.createRef)(),n.descriptionRef=Object(r.createRef)(),n}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.addProduct,className:"Add-product-container"},n.a.createElement("div",{className:"Input-element"},n.a.createElement("label",{for:"name"},"Name"),n.a.createElement("input",{type:"text",ref:this.nameRef,id:"name",placeholder:""})),n.a.createElement("div",{className:"Input-element"},n.a.createElement("label",{for:"price"},"Price"),n.a.createElement("input",{type:"Number",ref:this.priceRef,id:"price",min:"0"})),n.a.createElement("div",{className:"Input-element"},n.a.createElement("label",{for:"rating"},"Rating"),n.a.createElement("input",{type:"Number",max:"5",min:"0",ref:this.ratingRef,id:"rating"})),n.a.createElement("div",{className:"Input-element"},n.a.createElement("label",{for:"description"},"Description"),n.a.createElement("textarea",{ref:this.descriptionRef,rows:"2",id:"description"})),n.a.createElement("input",{type:"submit",value:"Add Product",id:"add"}))}}]),a}(n.a.Component),X=Object(m.b)((function(e){return Object(M.a)({},e)}))(Y),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){t.target.value<0&&(t.target.value=0),e.props.dispatch(C(t.target.value,e.props.cart))},e.increment=function(t){e.props.dispatch(C(1,e.props.cart))},e.decrement=function(t){e.props.dispatch(C(-1,e.props.cart))},e.deleteHandler=function(t){e.props.dispatch(T(e.props.cart.id))},e.saveHandler=function(t){e.props.dispatch(R(t))},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"cart_item"},n.a.createElement(Q,{product:this.props.cart.product,hideAddToCart:!0,deleteHandler:this.deleteHandler,saveHandler:this.saveHandler}),n.a.createElement("div",{className:"qty-container"},n.a.createElement("div",{className:"options vertical"},n.a.createElement(q,{handler:this.increment,src:"https://image.flaticon.com/icons/svg/1237/1237946.svg",alt:"increment",style:{height:"1em"}}),n.a.createElement("div",{className:"qty"},this.props.cart.qty),n.a.createElement(q,{handler:this.decrement,src:"https://image.flaticon.com/icons/svg/1828/1828901.svg",alt:"decrement",style:{height:"1em"}})),n.a.createElement("div",{style:{margin:"5px"}},"Total Cost  : ",this.props.cart.qty*this.props.cart.product.product_price)))}}]),a}(n.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).checkout=function(){e.props.dispatch(x())},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cart,a=0;return n.a.createElement("div",{className:"cart-container"},n.a.createElement("div",{className:"product-list"},t.map((function(t,r){return a+=t.qty*t.product.product_price,n.a.createElement(z,{cart:t,dispatch:e.props.dispatch,key:r})}))),n.a.createElement("div",{className:"total"},"Total Cost :",a,n.a.createElement("button",{className:"checkout",onClick:this.checkout},"checkout")))}}]),a}(n.a.Component),K=Object(m.b)((function(e){return{cart:e.products.cart}}))(G);var W=Object(h.f)(Object(m.b)((function(e){return{}}))((function(e){var t=e.location.state.product;return n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"left"},n.a.createElement("img",{className:"avatar",src:t.avatar,alt:"avatar"})),n.a.createElement("div",{className:"right"},n.a.createElement("div",{className:"product-name"},t.product_name),n.a.createElement("div",{className:"product-price"},t.product_price),n.a.createElement("div",{className:"product-rating"},n.a.createElement(V,{rating:t.rating})),n.a.createElement("div",{className:"product-description"},t.product_description),n.a.createElement("button",{onClick:function(a){a.stopPropagation(),e.dispatch(k(t))},className:"addtocart"},"Add To Cart")))}))),Z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(N.add_products).then((function(e){return e.json()})).then((function(t){e.props.dispatch({type:"SET_PRODUCTS_LIST",products:t})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p.a,null,n.a.createElement(h.c,null,n.a.createElement(h.a,null,n.a.createElement(v,null),n.a.createElement(h.a,{path:"/ecom-react/Product"},n.a.createElement(W,null)),n.a.createElement(h.a,{exact:!0,path:"/ecom-react/Products"},n.a.createElement(B,null)),n.a.createElement(h.a,{exact:!0,path:"/ecom-react/Add-Product"},n.a.createElement(X,null)),n.a.createElement(h.a,{exact:!0,path:"/ecom-react/cart"},n.a.createElement(K,null))))))}}]),a}(n.a.Component);var $=Object(m.b)((function(e){return{}}))(Z),ee=a(14),te=a(30),ae=a.n(te);function re(e){new ae.a({text:e,layout:"topRight",type:"success"}).show()}var ne={products:[],cart:[]};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.message&&re(t.message),t.type){case"SET_PRODUCTS_LIST":return Object(M.a)(Object(M.a)({},e),{},{products:t.products});case"ADD_PRODUCTS":var a=[];return Object.assign(a,e.products),a.push(t.product),Object(M.a)(Object(M.a)({},e),{},{products:a});case"DELETE_PRODUCTS":var r=e.products.filter((function(e){return!(e.id===t.id)}));return Object(M.a)(Object(M.a)({},e),{},{products:r});case"UPDATE_PRODUCTS":var n=[],c=[];for(var s in Object.assign(n,e.products),Object.assign(c,e.cart),n)n[s].id===t.product.id&&(n[s]=t.product);for(var o in c)t.product.id===c[o].product.id&&(c[o].product=t.product);return Object(M.a)(Object(M.a)({},e),{},{products:n,cart:c});case"UPDATE_QUANTITY":var i=[];for(var u in Object.assign(i,e.cart),i)i[u].id===t.cart.id&&(i[u]=t.cart);return Object(M.a)(Object(M.a)({},e),{},{cart:i});case"DELETE_CART_PRODUCTS":var d=[],l=-1;return Object.assign(d,e.cart),l=d.findIndex((function(e){return e.id===t.id})),d.splice(l,1),Object(M.a)(Object(M.a)({},e),{},{cart:d});case"ADD_PRODUCT_CART":var p=[];return Object.assign(p,e.cart),p.push(t.cart),Object(M.a)(Object(M.a)({},e),{},{cart:p});case"SORT_PRODUCTS":var m=[];return Object.assign(m,e.products),m.sort((function(e,t){return e.product_price-t.product_price})),Object(M.a)(Object(M.a)({},e),{},{products:m});case"RESET_FILTER":return Object(M.a)(Object(M.a)({},e),{},{products:t.products});case"CLEAR_CART":return Object(M.a)(Object(M.a)({},e),{},{cart:[]});default:return e}},se=a(22),oe=a(31),ie=a.n(oe),ue=Object(ee.c)({products:Object(se.a)({key:["products"],storage:ie.a,whitelist:["cart"]},ce)}),de=a(32);var le=function(){var e=Object(ee.d)(ue,Object(ee.a)(de.a));return{store:e,persistor:Object(se.b)(e)}}().store;console.log("store",le.getState()),s.a.render(n.a.createElement(m.a,{store:le},console.log(le.getState()),n.a.createElement(n.a.StrictMode,null,n.a.createElement($,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d573bcac.chunk.js.map
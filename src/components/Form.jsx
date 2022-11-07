import React from "react";
import Producto from "./Producto";
// action="http://localhost:4000/productos" method="GET" 
const Form = ()=>{
    const [product,editProduct]= React.useState( {
        id:0,
        title:"",
        description:"",
        price:0,
        discountPercentage:0,
        rating:0,
        stock:1,
        brand:"",
        category:"",
        thumbnail:"",
        images:[]
    })
    const send=(e)=>{
        e.preventDefault();
        fetch("http://localhost:4000/productos",{
            headers: {
                "Content-Type":"application/json"
            },
            method:"POST",
            body: JSON.stringify(product)
        });
    }
    const handleTitleChange=(e)=>{
        editProduct({...product,title:e.target.value});
    }
    const handlePriceChange=(e)=>{
        editProduct({...product,price:e.target.value});
    }
    const handleImgChange=(e)=>{
        editProduct({...product,images:e.target.value});
    }
    const handleCatChange=(e)=>{
        editProduct({...product,category:e.target.value});
    }
    return ( 
    <div className="form">
    <h2 className="form__h2">AMAZONE!</h2>
    <div id="tienda" className="form__form">
        <div className="form__info"><span>features</span> <span className="material-symbols-outlined">
package
</span></div>
        {/* <div id="form__lista" className="form__lista">
           <div className="form__vacio">Empty store</div>
        </div> */}
        <form className="form__lista" onSubmit={send}>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Name:</label>
    <input type="text" onChange={handleTitleChange} value={product.title} className="form__input" />
    <span className="form__icon material-symbols-outlined">title</span>
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Price:</label>
    <input type="number" onChange={handlePriceChange} className="form__input" />
    <span className="form__icon material-symbols-outlined">attach_money</span>
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Image(url):</label>
    <input type="text" onChange={handleImgChange} className="form__input" />
    <span className="form__icon material-symbols-outlined">image</span>
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Category:</label>
    <input type="text" onChange={handleCatChange} className="form__input" />
    <span className="form__icon material-symbols-outlined">category</span>
</div>
<button type="submit"  className="form__button">
    ADD PRODUCT <span className="material-symbols-outlined ">
        add_box
</span></button>
</form>
    </div>
    
</div>
    )
}


export default Form;


{/* <div className="form">
<h2>AMAZONE!</h2>
<div className="form__container">
&nbsp;
<div className="form__info">
<h2 className="form__h2">Add Product</h2>
</div>
<form className="form__form" onSubmit={send}>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Name:</label>
    <input type="text" className="form__input" />
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Price:</label>
    <input type="text" className="form__input" />
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Image(url):</label>
    <input type="text" className="form__input" />
</div>
<div className="form__block">
    <label htmlFor="precio" className="form__label" >Category:</label>
    <input type="text" className="form__input" />
</div>
<button type="submit" className="form__button"><span className="material-symbols-outlined">
add_box
</span>Add</button>
</form>
</div>
</div>   */}
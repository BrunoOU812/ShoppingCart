import React from "react";

const Articulo=(props)=>{
    const agregar=()=>{
        props.agregar([...props.prodCart,{title:props.nombre,price:props.precio,images:props.img}])
    }
        return(
            <div className="articulo">
                <img src={props.img} alt="" className="articulo__img" />
                <div className="articulo__nombre">{props.nombre}</div>
                <div className="articulo__precio">${props.precio}</div>
                <button onClick={agregar} className="articulo__agregar">Agregar <span className="material-symbols-outlined">
add_shopping_cart
</span></button>
            </div>
        )
    
}

export default Articulo
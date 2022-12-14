import React from "react";

const Producto=(props)=>{
    const removeProduct=()=>{
        props.remove([...props.prodCart.filter(prod=>prod.title!=props.nombre)])
    }
    console.log("imagen producto",props.img)
    return(
        <div className="producto">
            <img src={props.img} alt="" className="producto__img" />
            <div className="producto__nombre">{props.nombre}</div>
            <div className="producto__precio">${props.precio}</div>
            <button onClick={removeProduct} className="producto__borrar">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    )
    
}

export default Producto
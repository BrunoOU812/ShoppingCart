import React from "react";

const Producto=(props)=>{
    return(
        <div className="producto">
            <img src={props.img} alt="" className="producto__img" />
            <div className="producto__nombre">{props.nombre}</div>
            <div className="producto__precio">${props.precio}</div>
            <button className="producto__borrar">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    )
    
}

export default Producto
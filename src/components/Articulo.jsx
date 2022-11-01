import React from "react";

class Articulo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="articulo">
                <img src="https://via.placeholder.com/300/ccc/fff/" alt="" className="articulo__img" />
                <div className="articulo__nombre">{this.props.nombre}</div>
                <div className="articulo__precio">${this.props.precio}</div>
                <button className="articulo__agregar">Agregar <span class="material-symbols-outlined">
add_shopping_cart
</span></button>
            </div>
        )
    }
}

export default Articulo
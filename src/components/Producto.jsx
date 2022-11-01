import React from "react";

class Producto extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="producto">
                <img src="https://via.placeholder.com/150/ccc/fff/" alt="" className="producto__img" />
                <div className="producto__nombre">{this.props.nombre}</div>
                <div className="producto__precio">${this.props.precio}</div>
                <button className="producto__borrar"><span class="material-symbols-outlined">
delete
</span></button>
                {/* <span class="material-symbols-outlined">
shopping_cart
</span> */}
            </div>
        )
    }
}

export default Producto
import React from "react";
import Articulo from "./Articulo";
import Producto from "./Producto";

class Principal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let products=[
            {   
                id:1,
                nombre:"Pelota Adidas",
                precio:"10"
            },
            {   
                id:2,
                nombre:"Pelota Nike",
                precio:"10"
            },
            {   
                id:3,
                nombre:"Pelota Topper",
                precio:"10"
            },
            {   
                id:4,
                nombre:"Pelota",
                precio:"10"
            },
            {   
                id:5,
                nombre:"Pelota",
                precio:"10"
            },
            {   
                id:6,
                nombre:"Pelota",
                precio:"10"
            }
        ]
        const productList= products.map(product=><Producto nombre={product.nombre} precio={product.precio}/>)
        return(
            <div className="contenedor">
                <h2 className="contenedor__h2">AMAZONE!</h2>
                <div id="carrito" className="carrito">
                    <div className="carrito__info"><span>SHOPPING CART</span> <span class="material-symbols-outlined">
shopping_cart
</span></div>
                    <div id="carrito__lista" className="carrito__lista">
                        {productList}
                    </div>
                </div>
                <div id="tienda" className="tienda">
                    <div className="tienda__info"><span>STORE</span> <span class="material-symbols-outlined">
storefront
</span></div>
                    <div id="tienda__lista" className="tienda__lista">
                        <Articulo nombre="Pelota adidas" precio="10" />
                        <Articulo nombre="Pelota nike" precio="10" />
                        <Articulo nombre="Champion champion" precio="10" />
                        <Articulo nombre="Pelota" precio="10" />
                        <Articulo nombre="Pelota" precio="10" />
                        <Articulo nombre="Pelota" precio="10" />
                    </div>
                </div>
                <div className="subtotal">
                    <button className="subtotal__boton"><span class="material-symbols-outlined">
payments
</span>Purchase</button>
                    <div className="subtotal__monto">$11200</div>
                </div>
                {/* <img src="C:\Users\Bruno\Desktop\Carrito de compras\BMWD-logo-01.svg" alt="" className="logo" /> */}
                <div id="productos" className="productos">
                    
                </div>
            </div>
        )
    }
}

export default Principal
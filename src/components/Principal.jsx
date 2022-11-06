import React from "react";
import Articulo from "./Articulo";
import Producto from "./Producto";

const Principal=()=>{
    let products=[];
        React.useEffect(()=>{
            fetch("http://localhost:4000/productos")
            .then((respuesta)=>{
            return respuesta.json()
            })
            .then((respuestaJSON)=>{
                cambiarProductosTienda(respuestaJSON);
            });            
        },[]);

        const [categoriaActual, cambiarCategoria]= React.useState("laptops");
        const [productosCarrito, cambiarProductosCarrito]= React.useState([]);
        const [productosTienda, cambiarProductosTienda]= React.useState([]);
        const cambiador=()=>{
            return categoriaActual=="laptops"?cambiarCategoria("smartphones"):cambiarCategoria("laptops");
        }
        const agregar=(producto)=>{
            cambiarProductosCarrito([...productosCarrito,producto])
        }
        const filteredProducts = productosTienda.filter(product=>product.category==categoriaActual);
        const storeList= filteredProducts.map((product,i)=><Articulo key={i} agregar={agregar} img={product.images[0]} nombre={product.title} precio={product.price}/>)
        const productList= productosCarrito.map((product,i)=><Producto key={i} nombre={product.title} precio={product.price}/>)
        return(
            <div className="contenedor">
                <h2 className="contenedor__h2">AMAZONE!</h2>
                <div id="carrito" className="carrito">
                    <div className="carrito__info"><span>SHOPPING CART</span> <span className="material-symbols-outlined">
shopping_cart
</span></div>
                    <div id="carrito__lista" className="carrito__lista">
                        {productList.length?productList:<div className="carrito__vacio">Empty cart</div>}
                    </div>
                </div>
                <div id="tienda" className="tienda">
                    <div className="tienda__info"><span>STORE</span> <span className="material-symbols-outlined">
storefront
</span></div>
                    <div id="tienda__lista" className="tienda__lista">
                        {storeList.length?storeList:<div className="tienda__vacio">Empty store</div>}
                    </div>
                </div>
                <div className="subtotal">
                    <button className="subtotal__boton"><span className="material-symbols-outlined">
payments
</span>Purchase</button>
                    <div className="subtotal__monto">$11200</div>
                </div>
                <div className="categoria">
                    <button onClick={cambiador} className="categoria__cambiar"><span className="material-symbols-outlined categoria__icon">
cached
</span>&nbsp;Change {categoriaActual}</button>
                    </div>
            </div>
        )
}

export default Principal
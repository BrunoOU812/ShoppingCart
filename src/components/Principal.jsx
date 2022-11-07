import React from "react";
import Articulo from "./Articulo";
import Producto from "./Producto";
import Option from "./Option";

const Principal=()=>{
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
        const [productosTienda, cambiarProductosTienda]= React.useState([]);
        const [productosCarrito, cambiarProductosCarrito]= React.useState([]);
        const cambiador=()=>{
            return categoriaActual=="laptops"?cambiarCategoria("smartphones"):cambiarCategoria("laptops");
        }
        const filteredProducts = productosTienda.filter(product=>product.category==categoriaActual);
        const storeList= filteredProducts.map((product,i)=><Articulo key={i} prodCart={productosCarrito} add={cambiarProductosCarrito} img={product.images[0]} nombre={product.title} precio={product.price}/>)
        const productList= productosCarrito.map((product,i)=><Producto key={i} prodCart={productosCarrito} remove={cambiarProductosCarrito}  nombre={product.title} precio={product.price} images={product.images}/>)
        const total=(productosCarrito.length==0?0:productosCarrito.map(item=>parseInt(item.price)).reduce((a,b)=>a+=b));
        const options=productosTienda
            .map(product=>product.category)
            .concat("all")
            .filter((item,i,arr)=>(i-1)<0?item:item==arr[i-1]?0:item)
            .map((product,i)=><Option key={i} change={cambiarCategoria} option={product}/>)
            .reverse();
        const selectOpt=()=>{
            
        }
        
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
                    <div className="subtotal__monto">${total}</div>
                </div>
                <div className="categoria">
                    {/* <label >
                        <select onChange={selectOpt} className="tienda__select" >
                            {options}
                        </select>
                    </label> */}
                <button onClick={cambiador} className="categoria__cambiar"><span className="material-symbols-outlined categoria__icon">
filter_alt
</span>&nbsp;Change {categoriaActual}</button>
                </div>
                
            </div>
        )
}

export default Principal
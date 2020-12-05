import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { Link } from "react-router-dom"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])
    // console.log(products)
    
    return (
        <div className="products">
        {
            products.map(prod => <Product key={prod.id} product={prod} />)
        }
        </div>
    )
}
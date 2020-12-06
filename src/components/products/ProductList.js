import React, { useContext, useEffect } from "react"
import { TypeContext } from "../types/TypeProvider"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import { Link } from "react-router-dom"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { types, getTypes } = useContext(TypeContext)

    useEffect(() => {
        getTypes()
        .then(getProducts)
    }, [])
    
    return (
        <div className="products">
        <h1>Products</h1>
            {products.map(product => {
                const prodType = types.find(t => t.id === product.typeId)

                return <Product key={product.id} 
                            type={prodType}
                            product={product} 
                            />
            })
        }
        </div>
    )
}
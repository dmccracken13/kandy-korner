import React from "react"
import "./Product.css"

export const Product = ({ product, type }) => (
    <section className="product">
        <div className="product__id">Product Id: {product.id}</div>
        <div className="product__name">Name: {product.name}</div>
        <div className="product__type">Type: {type.name}</div>
        <div className="product__price">Price: {product.price}</div>
    </section>
)
import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/locations" render={
                    props => <LocationList {...props} />
                } />
            </LocationProvider>

            <ProductProvider>
                {/* Render the product list when http://localhost:3000/ */}
                <Route exact path="/products" render={
                    props => <ProductList {...props} />
                } />
            </ProductProvider>
        </>
    )
}
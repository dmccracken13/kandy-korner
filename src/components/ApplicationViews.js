import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { TypeProvider } from "./types/TypeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/locations" render={
                    props => <LocationList {...props} />
                } />
            </LocationProvider>

            <TypeProvider>
                <ProductProvider>
                    {/* Render the product list when http://localhost:3000/ */}
                    <Route exact path="/products" render={
                        props => <ProductList {...props} />
                    } />
                </ProductProvider>
            </TypeProvider>

            <LocationProvider>
                <EmployeeProvider>
                    {/* Render the product list when http://localhost:3000/ */}
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />   
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}
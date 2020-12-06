import React, { useState } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])

    const getCustomerCandy = () => {
        return fetch("http://localhost:8088/customerCandy")
            .then(res => res.json())
            .then(setCustomerCandy)
    }

    const addCustomerCandy = candy => {
        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candy)
        })
            .then(getCustomerCandy)
    }

    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, addCustomerCandy, getCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}
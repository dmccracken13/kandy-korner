import React, { useState } from "react"

export const TypeContext = React.createContext()

export const TypeProvider = (props) => {
    const [types, setTypes] = useState([])

    const getTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setTypes)
    }

    const addType = type => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        })
            .then(getTypes)
    }

    return (
        <TypeContext.Provider value={{
            types, addType, getTypes
        }}>
            {props.children}
        </TypeContext.Provider>
    )
}
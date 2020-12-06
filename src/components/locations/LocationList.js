import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])
    // console.log(locations)
    
    return (
        <div className="locations">
        <h1>Locations</h1>
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}

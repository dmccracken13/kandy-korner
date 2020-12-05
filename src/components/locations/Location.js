import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <div className="location__address">Address: {location.address}</div>
        <div className="location__sqftg">Square Footage: {location.squareFootage}</div>
        <div className="location__handicap">Handicap Acc: {location.handicapAccess.value}</div>
    </section>
)
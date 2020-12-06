import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
    <section className="employee">
        <div className="employee__name">Name: {employee.employee}</div>
        <div className="employee__location">Location: {employee.locationId}</div>
        <div className="employee__handicap">Hourly Rate: {employee.rate}</div>
    </section>
)
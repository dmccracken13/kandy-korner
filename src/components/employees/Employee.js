import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <div className="employee__name">Name: {employee.name}</div>
        <div className="employee__location">Location: {location.name}</div>
    </section>
)
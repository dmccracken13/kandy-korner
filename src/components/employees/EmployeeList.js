import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Link } from "react-router-dom"
import "./Employee.css"
import { Employee } from "./Employee"


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    
    useEffect(() => {
        getLocations()
        .then(getEmployees)
    }, [])
    
    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {employees.map(employee => {
                    const employeeLocation = locations.find(l => l.id === employee.locationId)

                    return <Employee key={employee.id}
                                employee={employee}
                                location={employeeLocation}
                            />
                    })
                }
            </article>
        </div>
    )
}

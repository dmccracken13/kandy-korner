import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fullTime = useRef(null)
    const rate = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])
    
    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        let isManager = manager.value
        let isFullTime = fullTime.value
        const hourRate = parseInt(rate.current.value)

        if (isManager === "true") {
            isManager = true
        }  else {isManager = false}

        if (isManager === "true") {
            isManager = true
        }  else {isManager = false}

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId,
                isManager,
                isFullTime,
                hourRate
            })
            .then(() => props.history.push("/employees"))
        }
        
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Is employee a manager? </label>
                    <select defaultValue="" name="manager" ref={manager} id="isManager" className="form-control" >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Is employee full time? </label>
                    <select defaultValue="" name="fullTime" ref={manager} id="isFullTime" className="form-control" >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourRate">Hourly Rate: </label>
                    <input type="number" id="hourRate" ref={rate} required autoFocus className="form-control" placeholder="Hourly rate" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}
    
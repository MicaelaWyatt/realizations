import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {addCheckIn} from "../modules/CheckInManager"

export const CheckInAddForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const timeStamp = Date.now();

    const [checkin, setCheckin] = useState({
        userId:currentUser,
        title:"",
        description:"",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)        
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
       
        const newCheckIn = {...checkin}
        let selectedVal = event.target.value
        if(event.target.id.includes("Id")) {
            selectedVal= parseInt(selectedVal)
        }
        newCheckIn[event.target.id] = selectedVal
        setCheckin(newCheckIn)
    }

    const handleClickSaveCheckIn = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        setIsLoading(true)
        // currentUserId:  parseInt(sessionStorage.getItem("nutshell_user")
        const title = checkin.title
        const description= checkin.description
        if (title === "" || description === ""){
            window.alert("Please input more information")
        } else{
            addCheckIn(checkin)
            .then(() => history.push("/portfolio"))
        }
    }

    return(
        <form className="checkIn-form">
            <h2 className="checkIn-form-header">Wellbeing</h2>
            <fieldset>
                <div>
                    <label className="checkIn-form-label">title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" value={checkin.title} ></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="checkIn-form-label">description</label>
                    <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" value={checkin.description} ></input>
                </div>
            </fieldset>
            <button className="saveCheckIn" onClick={handleClickSaveCheckIn}>record checkin</button>
        </form>
    )
}
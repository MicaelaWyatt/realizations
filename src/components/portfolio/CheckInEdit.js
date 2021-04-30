import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import {getCheckInById, updateCheckIn} from "../modules/CheckInManager"

export const CheckInEditForm = () => {
    const [checkIn, setCheckIn] = useState({
        title:"",
        description: "",
        timestamp:"",
    });

    const [isLoading, setIsLoading] = useState(false);

    const {checkInId} = useParams();
    const history = useHistory();

    const handleFeildChange = (event) => {
        const stateToChange = {...checkIn}
        stateToChange[event.target.id] = event.target.value
        setCheckIn(stateToChange)
    }

    const updateExistingCheckIn = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        setIsLoading(true)
        const timeStamp = Date.now();
        // currentUserId:  parseInt(sessionStorage.getItem("nutshell_user")
        const editedCheckIn = {
            userId:checkIn.userId,
            id:checkInId,
            title:checkIn.title,
            description: checkIn.description,
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        };

        updateCheckIn(editedCheckIn)
        .then(()=> history.push("/portfolio"))
    }

    useEffect(()=>{
        getCheckInById(checkInId)
        .then(checkIn => {
            setCheckIn(checkIn);
            setIsLoading(false);
        });
    },[]);

    return(
        <form className="checkIn-form">
        <h2 className="checkIn-form-header">Wellbeing</h2>
        <fieldset>
            <div>
                <label className="checkIn-form-label">title</label>
                <input type="text" id="title" onChange={handleFeildChange} required autoFocus className="form-control" value={checkIn.title} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label className="checkIn-form-label">description</label>
                <input type="text" id="description" onChange={handleFeildChange} required autoFocus className="form-control" value={checkIn.description} ></input>
            </div>
        </fieldset>
        <button className="saveCheckIn" onClick={updateExistingCheckIn}>record checkin</button>
    </form>
        
    )
}
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import {getCheckInById, updateCheckIn} from "../modules/CheckInManager"

export const CheckInEditForm = () => {
    const [checkIn, setCheckIn] = useState({
        theBest:"",
        theWorst: "",
        oneThing:"",
        timestamp:""
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
            theBest:checkIn.theBest,
            theWorst: checkIn.theWorst,
            oneThing: checkIn.oneThing,
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
        <h2 className="checkIn-form-header">Check-in</h2>
        <fieldset>
            <div>
                <label className="checkIn-form-label">...The Best (thing,event,moment,memory)?</label>
                <input type="text" id="theBest" onChange={handleFeildChange} required autoFocus className="form-control" value={checkIn.theBest} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label className="checkIn-form-label">... The Worst?</label>
                <input type="text" id="theWorst" onChange={handleFeildChange} required autoFocus className="form-control" value={checkIn.theWorst} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label className="checkIn-form-label">... One thing I can do differently to be a more effective/better person.</label>
                <input type="text" id="oneThing" onChange={handleFeildChange} required autoFocus className="form-control" value={checkIn.oneThing} ></input>
            </div>
        </fieldset>
        <button className="saveCheckIn" onClick={updateExistingCheckIn}>record checkin</button>
    </form>
        
    )
}
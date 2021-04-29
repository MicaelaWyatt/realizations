import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {addSelfGratitude} from "../modules/SelfGratitudeManager"

export const SelfGratitudeAddForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const timeStamp = Date.now();

    const [gratitude, setGratitude] = useState({
        userId:currentUser,
        content:"",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)        
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
       
        const newGratitude = {...gratitude}
        let selectedVal = event.target.value
        if(event.target.id.includes("Id")) {
            selectedVal= parseInt(selectedVal)
        }
        newGratitude[event.target.id] = selectedVal
        setGratitude(newGratitude)
    }

    const handleClickSaveGratitude = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        setIsLoading(true)
        // currentUserId:  parseInt(sessionStorage.getItem("nutshell_user")
        const content = gratitude.content
        if (content === ""){
            window.alert("Please input more information")
        } else{
            addSelfGratitude(gratitude)
            .then(() => history.push("/portfolio"))
        }
    }

    return(
        <form className="SelfGratitude-form">
            <h2 className="SelfGratitude-form-header">Self Gratitude</h2>
            <fieldset>
                <div>
                    <label className="SelfGratitude-form-label">content</label>
                    <input type="text" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" value={gratitude.content}></input>
                </div>
            </fieldset>
            <button className="saveSelfGratitude" onClick={handleClickSaveGratitude}>Save</button>
        </form>
    )
}
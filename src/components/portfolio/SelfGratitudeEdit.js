import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import {getSelfGratitudeById, updateSelfGratitude} from "../modules/SelfGratitudeManager"

export const SelfGratitudeEditForm = () => {
    const [gratitude, setGratitude] = useState({
        content:"",
        timestamp:"",
    });

    const [isLoading, setIsLoading] = useState(false);

    const {gratitudeId} = useParams();
    const history = useHistory();

    const handleFeildChange = (event) => {
        const stateToChange = {...gratitude}
        stateToChange[event.target.id] = event.target.value
        setGratitude(stateToChange)
    }

    const updateExistingGratitude = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        setIsLoading(true)
        const timeStamp = Date.now();
        // currentUserId:  parseInt(sessionStorage.getItem("nutshell_user")
        const editedGratitude = {
            userId:gratitude.userId,
            id:gratitudeId,
            content:gratitude.content,
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        };

        updateSelfGratitude(editedGratitude)
        .then(()=> history.push("/portfolio"))
    }

    useEffect(()=>{
        getSelfGratitudeById(gratitudeId)
        .then(gratitude => {
            setGratitude(gratitude);
            setIsLoading(false);
        });
    },[]);

    return(
        <form className="SelfGratitude-form">
            <h2 className="SelfGratitude-form-header">Self Gratitude</h2>
            <fieldset>
                <div>
                    <label className="SelfGratitude-form-label">content</label>
                    <input type="text" id="content" onChange={handleFeildChange} required autoFocus className="form-control" value={gratitude.content}></input>
                </div>
            </fieldset>
            <button className="saveSelfGratitude" onClick={updateExistingGratitude}>Save</button>
        </form>
    )
}
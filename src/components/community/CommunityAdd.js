import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { addRecommendation } from "../modules/CommunityManager"

export const RecommenedAddForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const timeStamp = Date.now();

    const [recommendation, setRecommendation] = useState({
        userId:currentUser,
        title:"",
        note:"",
        link:"",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newRecommendation = {...recommendation}
        let selectedVal = event.target.value
        if(event.target.id.includes("Id")) {
            selectedVal= parseInt(selectedVal)
        }
        newRecommendation[event.target.id] = selectedVal
        setRecommendation(newRecommendation)
    }

    const handleClickSaveRecommendation = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const title= recommendation.title
        const note= recommendation.note
        const link= recommendation.link
        if(title === "" ||note === "" || link === "" ){
            window.alert("Please input more information")
        } else{
            addRecommendation(recommendation)
            .then(()=> history.push("/community"))
        }
    }

    return(
        <form className="recommendation-form">
        <h2 className="recommendation-form-header">Recommendation</h2>
        <fieldset>
            <div>
                <label className="recommendation-form-label">Title</label>
                <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" value={recommendation.title} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label className="recommendation-form-label">Note</label>
                <input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" value={recommendation.note} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
            <label className="recommendFormLabel" >URL:</label>
                    <input type="text" id="link" onChange={handleControlledInputChange} required autoFocus className="form-control"  value={recommendation.link}></input>
            </div>
        </fieldset>
        <button className="saveRecommendation" onClick={handleClickSaveRecommendation}>record checkin</button>
    </form>
    )
}
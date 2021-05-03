import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getRecommendationById, updateRecommendation } from "../modules/CommunityManager"

export const RecommendEditForm = () => {
    const [recommendation, setRecommendation] = useState({
        title:"",
        note:"",
        link:"",
    });
    
    const [isLoading, setIsLoading] = useState(false);
    
    const {recommendationId} = useParams();
    const history = useHistory();
    
    const handleFeildChange = (event) => {
        const stateToChange = {...recommendation}
        stateToChange[event.target.id]= event.target.value
        setRecommendation(stateToChange)
    }
    
    const updateExistingRecommendation = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const timeStamp = Date.now();
        const editedRecommendation = {
        userId:recommendation.userId,
        id:recommendationId,
        title:recommendation.title,
        note:recommendation.note,
        link:recommendation.link,
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        };
        updateRecommendation(editedRecommendation)
            .then(()=> history.push("/community"))
        }

        useEffect(()=>{
            getRecommendationById(recommendationId)
            .then(recommend =>{
                setRecommendation(recommend);
                setIsLoading(false)
            });
        },[]);
    

    return(
        <form className="recommendation-form">
        <h2 className="recommendation-form-header">Recommendation</h2>
        <fieldset>
            <div>
                <label className="recommendation-form-label">Title</label>
                <input type="text" id="title" onChange={handleFeildChange} required autoFocus className="form-control" value={recommendation.title} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label className="recommendation-form-label">Note</label>
                <input type="text" id="description" onChange={handleFeildChange} required autoFocus className="form-control" value={recommendation.description} ></input>
            </div>
        </fieldset>
        <fieldset>
            <div>
            <label className="eventFormLabel" >URL:</label>
                    <input type="text" id="url" onChange={handleFeildChange} required autoFocus className="form-control" placeholder="URL" value={recommendation.url}/>
            </div>
        </fieldset>
        <button className="saveRecommendation" onClick={updateExistingRecommendation}>record checkin</button>
    </form>
    )
}
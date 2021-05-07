import React from "react"
import {useHistory} from "react-router-dom"

export const CommunityCard = ({recommendation, handleDeleteRecommendation}) => {
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.getItem("realization_user"))
    if(currentUser === recommendation.userId){
    return(
        <section className="recommended-card">
            
            <div>{recommendation.title}</div>
            <div>{recommendation.note} </div>
            <div className="currentUser-recommendation_url"><a className="card-url" href={recommendation.link} >Click Here To Read More</a></div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteRecommendation(recommendation.id)} >Delete</button>
            <button className="edit-bttn" type="button"  onClick={() => history.push(`/community/${(recommendation.id)}/edit`)}>Edit</button>
        </section> )}
        else{
            return(
                <section className="recommendation-card">
                <div>{recommendation.title}</div>
            <div>{recommendation.note} </div>
            <div className="currentUser-recommendation_url"><a className="card-url" href={recommendation.link} >Click Here To Read More</a></div>
                </section>
            )
        }
}

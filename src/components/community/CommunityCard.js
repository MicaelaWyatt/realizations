import React from "react"
import {useHistory} from "react-router-dom"

export const CommunityCard = ({recommendation, handleDeleteRecommendation}) => {
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.getItem("realization_user"))
    if(currentUser === recommendation.userId){
    return(
        <section className="recommended-card">
            <h5>{recommendation.title}</h5>
            <div>{recommendation.note} </div>
            <div className="currentUser-recommendation_url"><a className="card-url" href={recommendation.link} >Click Here To Read More</a></div>
            <i class="bi bi-trash"  onClick={() => handleDeleteRecommendation(recommendation.id)}></i>
            <i class="bi bi-pencil" onClick={() => history.push(`/community/${(recommendation.id)}/edit`)}></i>
        </section> )}
        else{
            return(
                <section className="recommendation-card">
                <h5>{recommendation.title}</h5>
            <div>{recommendation.note} </div>
            <div className="currentUser-recommendation_url"><a className="card-url" href={recommendation.link} >Click Here To Read More</a></div>
                </section>
            )
        }
}

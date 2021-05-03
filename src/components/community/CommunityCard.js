import React from "react"
import {useHistory} from "react-router-dom"

export const CommunityCard = ({recommendation, handleDeleteRecommendation}) => {
    const history = useHistory()
    return(
        <section className="SelfGratitude-card">
            <div>{recommendation.title}</div>
            <div>{recommendation.note} </div>
            <div className="currentUser-recommendation_url"><a className="card-url" >Click Here To Read More</a></div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteRecommendation(recommendation.id)} >Delete</button>
            <button className="edit-bttn" type="button"  onClick={() => history.push(`/community/${(recommendation.id)}/edit`)}>Edit</button>
        </section>
    )
}

// const currentLoggedInUser = parseInt(sessionStorage.getItem("realization_user"))
// if(currentLoggedInUser === article.userId)

// else{
//     return(
//     <section className="card">
//       <h2 className="article_title">{article.title}</h2>
//       <div className="article_synopsis">{article.synopsis}</div>
//       <div className="article_url"><a className="card-url" href={article.url}>Click Here To Read More</a></div>
//   </section>
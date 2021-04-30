import React from "react"
// import {useHistory} from "react-router-dom"

export const CommunityCard = () => {
    return(
        <section className="SelfGratitude-card">
            <div>users name who posted </div>
            <div>hey guys i just wanted to share this podcast with you. its great for anyone who likes manifesting and writing their goals down </div>
            <div className="currentUser-recommendation_url"><a className="card-url" >Click Here To Read More</a></div>
            <button className="delete-bttn" type="button" >Delete</button>
            <button className="edit-bttn" type="button" >Edit</button>
        </section>
    )
}

// const history = useHistory()
// const currentLoggedInUser = parseInt(sessionStorage.getItem("realization_user"))
// if(currentLoggedInUser === article.userId)

// else{
//     return(
//     <section className="card">
//       <h2 className="article_title">{article.title}</h2>
//       <div className="article_synopsis">{article.synopsis}</div>
//       <div className="article_url"><a className="card-url" href={article.url}>Click Here To Read More</a></div>
//   </section>
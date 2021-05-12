import React, { useEffect } from "react"
import { useState} from "react"
import {useHistory} from "react-router-dom"
import { deleteRecommendation, getAllRecommendations } from "../modules/CommunityManager";
import { CommunityCard } from "./CommunityCard"
import "./Community.css" 

export const CommunityList = () => {
    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = () => {
        return getAllRecommendations().then(recommendationsFromAPI => {
        setRecommendations(recommendationsFromAPI)
    })
}

const history = useHistory();

useEffect(()=>{
    getRecommendations();
},[])

const handleDeleteRecommendation = id => {
    deleteRecommendation(id)
    .then(()=> getAllRecommendations().then(setRecommendations))
}
function communityInfo() {
    alert("On your journey to bettering your self, it is important to stay motivated. The purpose of the community page is to allow users to share content that has helped them stay motivated.Share books, podcasts, or videos on the community page. find new sources of motivation through other users.")

}

return(
    <>
    <h2 className="community-header">Community</h2>
    <button type="button" className="info-button" onClick={communityInfo} >info</button>
    <button type="button" className="share-button" onClick={() => {history.push("/community/create")}}>share</button>
    <section className="community-list">
        {recommendations.map(recommendation => <CommunityCard key={recommendation.id} recommendation={recommendation} handleDeleteRecommendation={handleDeleteRecommendation}/>)}
    </section>
    </>
)
}
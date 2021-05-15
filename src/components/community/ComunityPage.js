import React, { useEffect } from "react"
import { useState} from "react"
import {useHistory} from "react-router-dom"
import { deleteRecommendation, getAllRecommendations } from "../modules/CommunityManager";
import { CommunityCard } from "./CommunityCard"
import "./Community.css" 
import Modal from 'react-bootstrap/Modal'

export const CommunityList = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

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

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Community Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          On your journey to bettering your self, it is important to stay motivated. 
          The purpose of the community page is to allow users to share content that has helped them stay motivated. 
          Share books, podcasts, or videos on the community page. find new sources of motivation through other users.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

return(
    <>
    <h2 className="community-header">Community</h2>
    <i class="bi bi-info-circle" variant="primary" onClick={() => setModalShow(true)}></i>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    <button type="button" className="share-button" onClick={() => {history.push("/community/create")}}>share</button>
    <section className="community-list">
        {recommendations.map(recommendation => <CommunityCard key={recommendation.id} recommendation={recommendation} handleDeleteRecommendation={handleDeleteRecommendation}/>)}
    </section>
    </>
)
}
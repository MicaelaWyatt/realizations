import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { SelfGratitudeCard } from "./SelfGratitudeCard"
import { CheckInCard } from "./CheckInCard"
import { deleteCheckIn, getAllCheckIns } from "../modules/CheckInManager"
import { deleteSelfGratitude, getAllSelfGratitude} from "../modules/SelfGratitudeManager"
import "./Portfolio.css"
import Modal from 'react-bootstrap/Modal'
import {getAllUsers} from "../modules/UsersManager"
import { UsersName } from "./UsersName"



export const Portfolio = () => {
const [checkIns, setCheckIns] = useState([]);
const [gratitudes, setGratitudes] = useState([]);
const [pageInfoModalShow, setPageInfoModalShow] = React.useState(false);
const [checkInfoModalShow, setCheckInfoModalShow] = React.useState(false);
const [gratitudeModalShow, setGratitudeModalShow]= React.useState(false)

const getCheckins = () => {
return getAllCheckIns().then(checkInsFromAPI =>{
setCheckIns(checkInsFromAPI)
});
};

const getSelfGratitude = () => {
    return getAllSelfGratitude().then(gratitudesFromAPI =>{
        setGratitudes(gratitudesFromAPI)
    });
};



const history = useHistory();
const currentUser = parseInt(sessionStorage.getItem("realization_user"));

useEffect(()=>{
  getCheckins();
  getSelfGratitude();
  
},[])



const handleDeleteGratitude = id => {
    deleteSelfGratitude(id)
    .then(()=>getAllSelfGratitude().then(setGratitudes));
}

const handleDeleteCheckIn = id => {
deleteCheckIn(id)
.then(()=>getAllCheckIns().then(setCheckIns));
}

function PageInfoModal(props) {
    return (
      <Modal className="PageModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header  className="PageModal" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Portfolio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  className="PageModal" >
          <p>
          Welcome to your portfolio.The purpose of the portfolio page is to focus on you. 
          On the left is a list of all your check-Ins. and on the right is a list of your gratitude statements.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  function CheckInInfoModal(props) {
    return (
      <Modal className="CheckInModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="CheckInModal" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                Check-ins
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="CheckInModal" >
          <p>
          The concept of Check-ins is to make the most of where you are and who and what you have in life. 
          The purpose of Check-ins is to have a space to pause, reflect, connect, and share intentions. This not only demonstrated openness, but it moves us and the things we are a part of forward.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  function GratitudeInfoModal(props) {
    return (
      <Modal className="gratitudeModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="gratitudeModal" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Self Gratitude
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="gratitudeModal">
          <p>
          The purpose of Self Gratitude is to acknowledge your accomplishments. 
          This could be anything from helping an old lady cross the street, to liking how you acted in a certain situation. 
          Seeing your accomplishments can help cultivate a positive attitude, especially when times get tough.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

    return(
        <>
        <div className="user-info-new">
          <UsersName/>
        {/* <h2 className="portfolio-header" >Hello {users.name}</h2> */}
        <i id="portfolio" class="bi bi-info-circle" variant="primary" onClick={() => setPageInfoModalShow(true)}></i>
        <PageInfoModal show={pageInfoModalShow} onHide={() => setPageInfoModalShow(false)} />
        </div>
       <section className="CheckInSection">
            <h3 className="checkIn">Check-ins</h3>
            <i id="check" class="bi bi-info-circle" variant="primary" onClick={() => setCheckInfoModalShow(true)}></i>
        <CheckInInfoModal show={checkInfoModalShow} onHide={() => setCheckInfoModalShow(false)} />   
        <i class="bi bi-plus-circle" onClick={() => {history.push("/portfolio/create")}}></i>
        <div className="wellbeing-list">
           {checkIns.map(checkIn => {
           if(checkIn.userId === currentUser) {
           return < CheckInCard key={checkIn.id} checkIn={checkIn} handleDeleteCheckIn={handleDeleteCheckIn}/>
        }
    })} 
        </div></section>
        <aside className="SelfGratitude-list">
            <h3>Self Gratitude</h3>
            <i id="gratitude" class="bi bi-info-circle" variant="primary" onClick={() => setGratitudeModalShow(true)}></i>
        <GratitudeInfoModal show={gratitudeModalShow} onHide={() => setGratitudeModalShow(false)} />
        <i id="self" class="bi bi-plus-circle" onClick={() => {history.push("/portfolio/create2")}}></i>
            {gratitudes.map(gratitude =>{ 
            if(gratitude.userId === currentUser){
            return< SelfGratitudeCard key={gratitude.id} gratitude={gratitude} handleDeleteGratitude={handleDeleteGratitude}/>
            }})}
        </aside>
        </>
    )
}
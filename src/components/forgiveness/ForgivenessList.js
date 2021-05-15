import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { deleteForgiveness, getAllForgiveness, getForgivenessById, updateForgiveness } from "../modules/ForgivenessManager";
import "./Forgiveness.css"
import { ForgivenessCard } from "./ForgivenessCard"
import Modal from 'react-bootstrap/Modal'



export const ForgivenessList = () => {
    const[forgivenesses,setForgivenesses] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));

    const getForgivenesses = () => {
        return getAllForgiveness().then(forgivenessesFromAPI =>{
            setForgivenesses(forgivenessesFromAPI)
        });
    };

    const handleDeleteForgiveness = id =>{
        deleteForgiveness(id)
        .then(()=> getAllForgiveness().then(setForgivenesses))
    }

  const handleResolveClick = (id) => {
      getForgivenessById(id)
      .then((retrievedForgiveness => {
          if(retrievedForgiveness.resolved === false){
              retrievedForgiveness.resolved = true;
          }
          updateForgiveness(retrievedForgiveness).then(() => getForgivenesses)
          .then(getForgivenesses)
          
      }))
  }

    useEffect(() => {
        getForgivenesses();
    },[])    

    function forgivenessInfo() {
        alert("Holding on to regret, pain, and resentment hurts others. But it also hurts you. The purpose of the Forgiveness page is to write down things you want to forgive people for, and to read each card until the statement becomes true. When you feel you can whole heartedly forgive the person for what they did then you can click the resolve button and your card will dissapear.")
    
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
            Goals Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Holding on to regret, pain, and resentment hurts others. 
          But it also hurts you. The purpose of the Forgiveness page is to write down things you want to forgive people for, and to read each card until the statement becomes true. 
          When you feel you can whole heartedly forgive the person for what they did then you can click the resolve button and your card will dissapear.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
    return(
        <>
        <h2 className="forgiveness-header">Forgiveness</h2>
        <i class="bi bi-info-circle" variant="primary" onClick={() => setModalShow(true)}></i>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        <i class="bi bi-plus-circle" onClick={() => {history.push("/forgiveness/create")}}></i>
        <section className="forgivenessList">
            {forgivenesses.map(forgiveness =>{
                if(forgiveness.resolved === false && forgiveness.resolved === false && forgiveness.userId === currentUser){
                    return <ForgivenessCard key={forgiveness.id} forgiveness={forgiveness} handleResolveClick={handleResolveClick} handleDeleteForgiveness={handleDeleteForgiveness} />
                }
            })}
        </section>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { deleteGoal, getAllGoals } from '../modules/GoalsManager';
import { GoalsCard } from './GoalsCard'
import "./Goals.css"
import Modal from 'react-bootstrap/Modal'


export const GoalsList = () => {
    const [goals, setGoals] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const getGoals = () => {
        return getAllGoals().then(goalsFromAPI => {
            setGoals(goalsFromAPI)
        });
    };

    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));

    useEffect(()=>{
        getGoals();
    },[])

    const handleDeleteGoal = id => {
        deleteGoal(id)
        .then(()=> getAllGoals().then(setGoals))
    }


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="GoalHead" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Goals Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="GoalBody">
          <p>
          The purpose of the goals page is to write down short term or long term goals you have for your life.
          Along with the steps you are going to take to make your goal happen.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  

    return(
        <>
        <h2 className="goals-header">Goals</h2>
        <i class="bi bi-info-circle" variant="primary" onClick={() => setModalShow(true)}></i>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        <i class="bi bi-plus-circle" onClick={() => {history.push("/goals/create")}}></i>
        <section className="goalList">
        {goals.map(goal =>{ if(goal.userId === currentUser){
            return<GoalsCard key={goal.id} goal={goal} handleDeleteGoal={handleDeleteGoal}/>
            }})}
        
        </section>
        </>
    )
}
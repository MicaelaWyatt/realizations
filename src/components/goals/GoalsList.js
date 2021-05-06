import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { deleteGoal, getAllGoals } from '../modules/GoalsManager';
import { GoalsCard } from './GoalsCard'


export const GoalsList = () => {
    const [goals, setGoals] = useState([]);

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

    function goalInfo() {
        alert("The purpose of the goals page is to write down short term or long term goals you have for your life. along with the steps you are going to take to make your goal happen.")
    
}

    return(
        <>
        <h1>Goals</h1>
        <button type="button" className="info-button" onClick={goalInfo} >info</button>
        <button type="button" className="add-goal-button" id="goal-add" onClick={() => {history.push("/goals/create")}}>add</button>
        <section>
        {goals.map(goal =>{ 
            if(goal.userId === currentUser){
            return<GoalsCard key={goal.id} goal={goal} handleDeleteGoal={handleDeleteGoal}/>
            }})}
        
        </section>
        </>
    )
}
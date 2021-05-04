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

    useEffect(()=>{
        getGoals();
    },[])

    const handleDeleteGoal = id => {
        deleteGoal(id)
        .then(()=> getAllGoals().then(setGoals))
    }

    return(
        <>
        <h1>Goals</h1>
        <button type="button" className="add-goal-button" id="goal-add" onClick={() => {history.push("/goals/create")}}>add</button>
        <section>
            {goals.map(goal => <GoalsCard key={goal.id} goal={goal} handleDeleteGoal={handleDeleteGoal} />)}
        </section>
        </>
    )
}
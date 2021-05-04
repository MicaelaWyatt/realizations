import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getGoalById, updateGoal } from "../modules/GoalsManager"

export const GoalEditForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const [goals, setGoals] = useState({
        userId: currentUser,
        goal:"",
        steps:"",
        timestamp:""
    })

    const [isLoading, setIsLoading] = useState(false)

    const {goalId} = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = {...goals}
        stateToChange[event.target.id] = event.target.value
        setGoals(stateToChange)
    }

    const updateExistingGoal = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const timeStamp = Date.now();
        const editedGoal={
            userId:goals.userId,
            id:goalId,
            goal:goals.goal,
            steps:goals.steps,
            timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        };
        updateGoal(editedGoal)
        .then(()=> history.push("/goals"))
    }

    useEffect(()=>{
        getGoalById(goalId)
        .then(goal => {
            setGoals(goal);
            setIsLoading(false);
        });
    },[]);

    return(
        <form className="Goals-form">
            <h2>Goals</h2>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What is a goal you would like to set for yourself</label> 
                    <input type="text" id="goal" onChange={handleFieldChange} required autoFocus className="form-control" defaultValue={goals.goal}></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What steps are you going to make to acheive your goal</label> 
                    <input type="text" id="steps" onChange={handleFieldChange} required autoFocus className="form-control" defaultValue={goals.steps} ></input>
                </div>
            </fieldset>
            <button className="saveForgiveness" id="save-goal" onClick={updateExistingGoal}>save</button>
        </form>
    )
}
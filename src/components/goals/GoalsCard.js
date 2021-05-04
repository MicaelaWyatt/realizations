import React from "react"
import { useHistory } from "react-router-dom"

export const GoalsCard = ({goal, handleDeleteGoal}) => {
    const history = useHistory();
    return(
        <section className="GoalCard">
            <div>Goal</div>
            <div>{goal.goal}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
            <button className="edit-bttn" type="button" onClick={() => history.push(`/goals/${(goal.id)}/edit`)}>Edit</button>
        </section>
    )
}
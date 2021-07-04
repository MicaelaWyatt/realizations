import React from "react"
import { useHistory } from "react-router-dom"

export const GoalsCard = ({ goal, handleDeleteGoal }) => {
    const history = useHistory();
    const goals = goal.goal.length
    console.log(goals);
    return (
        <div className="GoalCard">
            <section className="content">
                <div className="content" >{goal.goal}</div>
                <i class="bi bi-trash" onClick={() => handleDeleteGoal(goal.id)}></i>
                <i class="bi bi-pencil" onClick={() => history.push(`/goals/${(goal.id)}/edit`)}></i>
            </section>
        </div>
    )
}
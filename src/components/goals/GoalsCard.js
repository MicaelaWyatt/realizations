import React from "react"

export const GoalsCard = ({goal, handleDeleteGoal}) => {
    return(
        <section className="GoalCard">
            <div>Goal</div>
            <div>{goal.goal}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
            <button className="edit-bttn" type="button" >Edit</button>
        </section>
    )
}
import React from "react"

export const GoalsCard = () => {
    return(
        <section className="GoalCard">
            <div>Goal</div>
            <div>I would love to start reading 15 minutes a day</div>
            <button className="delete-bttn" type="button" >Delete</button>
            <button className="edit-bttn" type="button" >Edit</button>
        </section>
    )
}
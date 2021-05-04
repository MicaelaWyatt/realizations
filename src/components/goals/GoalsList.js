import React from 'react'
import { GoalsCard } from './GoalsCard'


export const GoalsList = () => {
    return(
        <>
        <h1>Goals</h1>
        <button type="button" className="add-goal-button">add</button>
        <section>
            <GoalsCard/>
        </section>
        </>
    )
}
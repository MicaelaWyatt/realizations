import React, {useState, useEffect} from "react"
import { SelfGratitudeCard } from "./SelfGratitudeCard"
import { CheckInCard, WellBeingCard } from "./CheckInCard"

export const Portfolio = () => {
    return(
        <>
        <div>
        <h2>Hello Micaela</h2>
        <button type="button" className="info-button">info</button>
        </div>
            <h4>Well-Being</h4>
        <div className="wellbeing-list">
            < CheckInCard />
        </div>
        <aside className="SelfGratitude-list">
            <h5>Self Gratitude</h5>
            < SelfGratitudeCard />
        </aside>
        </>
    )
}
import React from "react"
import {useHistory} from "react-router-dom"

export const CheckInCard = ({checkIn, handleDeleteCheckIn}) => {
    const history= useHistory()
    return(
        <section className="wellbeing-card">
            <div className="wellbeing-theBest">{checkIn.theBest}</div>
            <div>{checkIn.theWorst}</div>
            <div>{checkIn.oneThing}</div>
            <div>{checkIn.timestamp}</div>
            <i class="bi bi-trash" onClick={() => handleDeleteCheckIn(checkIn.id)}></i>
            <i class="bi bi-pencil" onClick={() => history.push(`/portfolio/${checkIn.id}/edit`)}></i>
        </section>
    )
}
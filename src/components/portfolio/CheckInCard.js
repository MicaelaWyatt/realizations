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
            <button className="delete-bttn" type="button" onClick={() => handleDeleteCheckIn(checkIn.id)}>Delete</button>
      <button className="edit-bttn" type="button" onClick={() => history.push(`/portfolio/${checkIn.id}/edit`)} >Edit</button>
        </section>
    )
}
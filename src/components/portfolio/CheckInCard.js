import React from "react"
import {useHistory} from "react-router-dom"

export const CheckInCard = ({checkIn, handleDeleteCheckIn}) => {
    const history= useHistory()
    return(
        <section className="wellbeing-card">
            <h3 className="wellbeing-title">{checkIn.title}</h3>
            <div>{checkIn.description}</div>
            <div>{checkIn.timestamp}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteCheckIn(checkIn.id)}>Delete</button>
      <button className="edit-bttn" type="button" onClick={() => history.push(`/portfolio/${checkIn.id}/edit`)} >Edit</button>
        </section>
    )
}
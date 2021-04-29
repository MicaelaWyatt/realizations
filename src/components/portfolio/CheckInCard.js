import React from "react"

export const CheckInCard = ({checkIn, handleDeleteCheckIn}) => {
    return(
        <section className="wellbeing-card">
            <h3 className="wellbeing-title">{checkIn.title}</h3>
            <div>{checkIn.description}</div>
            <div>{checkIn.timestamp}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteCheckIn(checkIn.id)}>Delete</button>
      <button className="edit-bttn" type="button" >Edit</button>
        </section>
    )
}
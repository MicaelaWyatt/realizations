import React from "react"

export const SelfGratitudeCard = ({gratitude, handleDeleteGratitude}) => {
    return(
        <section className="SelfGratitude-card">
            <div>{gratitude.content} </div>
            <div>{gratitude.timestamp}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteGratitude(gratitude.id)}>Delete</button>
      <button className="edit-bttn" type="button" >Edit</button>
        </section>
    )
}
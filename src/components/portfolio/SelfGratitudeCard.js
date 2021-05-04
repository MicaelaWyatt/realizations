import React from "react"
import {useHistory} from "react-router-dom"

export const SelfGratitudeCard = ({gratitude, handleDeleteGratitude}) => {
    const history= useHistory()
    return(
        <section className="SelfGratitude-card">
            <div>{gratitude.content} </div>
            <div>{gratitude.timestamp}</div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteGratitude(gratitude.id)}>Delete</button>
      <button className="edit-bttn" type="button" onClick={() => history.push(`/portfolio/selfGratitude/${gratitude.id}/edit`)} >Edit</button>
        </section>
    )
}
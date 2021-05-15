import React from "react"
import {useHistory} from "react-router-dom"

export const SelfGratitudeCard = ({gratitude, handleDeleteGratitude}) => {
    const history= useHistory()
    return(
        <section className="SelfGratitude-card">
            <div>{gratitude.content} </div>
            <div>{gratitude.timestamp}</div>
            <i id="sgtrash" class="bi bi-trash"  onClick={() => handleDeleteGratitude(gratitude.id)}></i>
            <i id="sgedit" class="bi bi-pencil" onClick={() => history.push(`/portfolio/selfGratitude/${gratitude.id}/edit`)}></i>
        </section>
    )
}
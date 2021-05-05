import React from "react"
import { useHistory } from "react-router-dom"

export const ForgivenessCard = ({ forgiveness, handleDeleteForgiveness, handleResolveClick}) => {
    const history = useHistory();
    return(
        <section className="ForgivenessCard">
            <div>I wanted to forgive {forgiveness.who} for {forgiveness.offense} </div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteForgiveness(forgiveness.id)} >Delete</button>
            <button className="edit-bttn" type="button"  onClick={() => history.push(`/forgiveness/${(forgiveness.id)}/edit`)}>Edit</button>
            <button className="resolve-bttn" type="button" onClick={handleResolveClick}>resolve</button>
        </section>
    )
}
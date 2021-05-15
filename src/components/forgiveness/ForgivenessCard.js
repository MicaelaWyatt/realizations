import React from "react"
import { useHistory } from "react-router-dom"

export const ForgivenessCard = ({ forgiveness, handleDeleteForgiveness, handleResolveClick}) => {
    const history = useHistory();
    return(
        <section className="ForgivenessCard">
            <section className="FCcontent">
            <div>I wanted to forgive {forgiveness.who} for {forgiveness.offense} </div>
            <i class="bi bi-trash"  onClick={() => handleDeleteForgiveness(forgiveness.id)}></i>
            <i class="bi bi-pencil" onClick={() => history.push(`/forgiveness/${(forgiveness.id)}/edit`)}></i>
            <button className="resolve-bttn" type="button" onClick={() => handleResolveClick(forgiveness.id)}>resolve</button>
            </section>
        </section>
    )
}
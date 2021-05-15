import React from "react"
import { useHistory } from "react-router-dom"

export const ForgivenessCard = ({ forgiveness, handleDeleteForgiveness, handleResolveClick}) => {
    const history = useHistory();
    return(
        <section className="ForgivenessCard">
            <section className="FCcontent">
            <div>I wanted to forgive {forgiveness.who} for {forgiveness.offense} </div>
            <i id="FTrash" class="bi bi-trash"  onClick={() => handleDeleteForgiveness(forgiveness.id)}></i>
            <i id="FEdit" class="bi bi-pencil" onClick={() => history.push(`/forgiveness/${(forgiveness.id)}/edit`)}></i>
            <i id="FHeart" class="bi bi-heart"onClick={() => handleResolveClick(forgiveness.id)}></i>
            </section>
        </section>
    )
}
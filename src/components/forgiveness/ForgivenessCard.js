import React from "react"

export const ForgivenessCard = ({ forgiveness, handleDeleteForgiveness, handleResolveClick}) => {
    return(
        <section className="ForgivenessCard">
            <div>I wanted to forgive {forgiveness.who} for {forgiveness.offense} </div>
            <button className="delete-bttn" type="button" onClick={() => handleDeleteForgiveness(forgiveness.id)} >Delete</button>
            <button className="edit-bttn" type="button" >Edit</button>
            <button className="resolve-bttn" type="button" onClick={handleResolveClick}>resolve</button>
        </section>
    )
}
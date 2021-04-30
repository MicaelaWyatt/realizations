import React from "react"
import { useState, useHistory} from "react"
import { CommunityCard } from "./CommunityCard"

export const CommunityList = () => {
    return(
        <>
        <h1>Community</h1>
        <button type="button" className="share-button">share</button>
        <section><CommunityCard/></section>
        </>
    )
}
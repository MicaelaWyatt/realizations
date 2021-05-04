import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { addGoal } from "../modules/GoalsManager"

export const GoalsAddForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const timeStamp = Date.now();

    const [goal, setgoal]=useState({
        userId:currentUser,
        
    })
    return(
        <form className="Goals-form">
            <h2>Goals</h2>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What is a goal you would like to set for yourself</label> 
                    <input type="text" ></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What steps are you going to make to acheive your goal</label> 
                    <input type="text" id="reason" ></input>
                </div>
            </fieldset>
            <button className="saveForgiveness">save</button>
        </form>
    )
}
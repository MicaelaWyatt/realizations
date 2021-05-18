import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { addGoal } from "../modules/GoalsManager"
import "./Goals.css"

export const GoalsAddForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const timeStamp = Date.now();

    const [idea, setIdea]=useState({
        userId:currentUser,
        goal:"",
        steps:"",
        timeStamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp) 
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const history= useHistory();

    const handleControlledInputChange = (event) => {
        const newGoal = {...idea}
        let selectedVal= event.target.value
        if(event.target.id.includes("Id")){
            selectedVal = parseInt(selectedVal)
        }
        newGoal[event.target.id] = selectedVal
        setIdea(newGoal)
    }

    const handleClickSaveGoal = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const goal = idea.goal
        const steps = idea.steps
        if(goal === "" || steps === ""){
        window.alert("Please input more information")
    } else{ addGoal(idea)
    .then(()=> history.push("/goals"))
}
}
    return(
        <form autocomplete="off" className="Goals-form">
            <h2 className="Goals-form-header">Goals</h2>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What is a goal you would like to set for yourself</label> 
                    <input type="text" id="goal" onChange={handleControlledInputChange}></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="goalFormLabel">What steps are you going to make to acheive your goal</label> 
                    <input type="text" id="steps" onChange={handleControlledInputChange} ></input>
                </div>
            </fieldset>
            <button className="saveForgiveness" id="save-goal" onClick={handleClickSaveGoal}>save</button>
        </form>
    )
}
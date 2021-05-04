import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { addForgiveness } from "../modules/ForgivenessManager"

export const ForgivenessAddForm = () => {
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    
    const [forgiveness, setForgiveness] = useState({ 
        userId:currentUser,
        who:"",
        offense:"",
        resolved:false
    });
    
    const [isLoading, setIsLoading]= useState(false);
    
    const handleControlledInputChange = (event) => {
        const newForgiveness = {...forgiveness}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal= parseInt(selectedVal)
        }
        newForgiveness[event.target.id] = selectedVal
        setForgiveness(newForgiveness)
    }

const handleClickSaveForgiveness = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const who = forgiveness.who;
        const offense = forgiveness.offense;
    
        addForgiveness(forgiveness)
        .then(()=> history.push("/forgiveness"))
    

}

    const handleCancel = (event) => {
        history.push("/forgiveness")
    }

    return(
        <form className="Forgiveness-form">
            <h2>Forgiveness</h2>
            <fieldset>
                <div>
                    <label className="forgivenessFormLabel">Who are you trying to forgive?</label>
                    <input type="text" id="who" className="form-control" onChange={handleControlledInputChange}></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="forgivenessFormLabel">what did this person do?</label>
                    <input type="text" id="offense" className="form-control" onChange={handleControlledInputChange}></input>
                </div>
            </fieldset>
            <button className="cancel-bttn" onClick={handleCancel}>Cancel</button>
            <button className="saveForgiveness" onClick={handleClickSaveForgiveness}>save</button>
        </form>
    )
}
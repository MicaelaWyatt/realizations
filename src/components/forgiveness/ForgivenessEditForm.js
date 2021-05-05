import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getForgivenessById, updateForgiveness } from "../modules/ForgivenessManager";

export const ForgivenessEditForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));
    const [forgivenesses, setForgivenesses]=useState({
        userId:currentUser,
        who:"",
        offense: "",
        resolved: false,
    })

    const [isLoading, setIsLoading] = useState(false)

    const {forgivenessId} = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = {...forgivenesses}
        stateToChange[event.target.id] = event.target.value
        setForgivenesses(stateToChange)
    }

    const updateExistingForgiveness = (event) =>{
        event.preventDefault()
        setIsLoading(true)
        const editedForgiveness={
            userId:forgivenesses.userId,
            id:forgivenessId,
            who:forgivenesses.who,
            offense:forgivenesses.offense,
            resolved:forgivenesses.resolved
        };
        updateForgiveness(editedForgiveness)
        .then(()=> history.push("/forgiveness"))
    }

    useEffect(()=>{
        getForgivenessById(forgivenessId)
        .then(forgive=>{
            setForgivenesses(forgive);
            setIsLoading(false);
        });
    },[]);
    return(
        <form className="Forgiveness-form">
            <h2>Forgiveness</h2>
            <fieldset>
                <div>
                    <label className="forgivenessFormLabel">Who are you trying to forgive?</label>
                    <input type="text" id="who" className="form-control" onChange={handleFieldChange} required autoFocus defaultValue={forgivenesses.who}></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label className="forgivenessFormLabel">what did this person do?</label>
                    <input type="text" id="offense" className="form-control" onChange={handleFieldChange} required autoFocus defaultValue={forgivenesses.offense}></input>
                </div>
            </fieldset>
            <button className="cancel-bttn" >Cancel</button>
            <button className="saveForgiveness" onClick={updateExistingForgiveness}>save</button>
        </form>
    )
}
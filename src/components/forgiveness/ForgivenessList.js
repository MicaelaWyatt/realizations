import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { deleteForgiveness, getAllForgiveness, updateForgiveness } from "../modules/ForgivenessManager";

import { ForgivenessCard } from "./ForgivenessCard"


export const ForgivenessList = () => {
    const[forgivenesses,setForgivenesses] = useState([]);
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));

    const getForgivenesses = () => {
        return getAllForgiveness().then(forgivenessesFromAPI =>{
            setForgivenesses(forgivenessesFromAPI)
        });
    };

    const handleDeleteForgiveness = id =>{
        deleteForgiveness(id)
        .then(()=> getAllForgiveness().then(setForgivenesses))
    }

    const handleResolveClick = (event) => {
        const forgivenessId = event.target.id.spit("--")[1]

        getAllForgiveness()
        .then(allForgivenesses=>{
            const targetedForgiveness = allForgivenesses.find(forgiveness => forgiveness.id === parseInt(forgivenessId))
            targetedForgiveness.resolved = true
            return targetedForgiveness
        })
        .then(updatedForgiveness => {
            updateForgiveness(updatedForgiveness)
            .then(()=>{
                getForgivenesses()
            })

        })
    }

    useEffect(() => {
        getForgivenesses();
    },[])    

    function forgivenessInfo() {
        alert("Holding on to regret, pain, and resentment hurts others. But it also hurts you. The purpose of the Forgiveness page is to write down things you want to forgive people for, and to read each card until the statement becomes true. When you feel you can whole heartedly forgive the person for what they did then you can click the resolve button and your card will dissapear.")
    
}

    return(
        <>
        <h1>Forgiveness</h1>
        <button type="button" className="info-button" onClick={forgivenessInfo} >info</button>
        <button type="button" className="add-Forgiveness-button" onClick={() => {history.push("/forgiveness/create")}}>add</button>
        <section>
            {forgivenesses.map(forgiveness =>{
                if(forgiveness.resolved === false && forgiveness.userId === currentUser){
                    return <ForgivenessCard key={forgiveness.id} forgiveness={forgiveness} handleResolveClick={handleResolveClick} handleDeleteForgiveness={handleDeleteForgiveness} />
                }
            })}
        </section>
        </>
    )
}
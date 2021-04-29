import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { SelfGratitudeCard } from "./SelfGratitudeCard"
import { CheckInCard } from "./CheckInCard"
import { deleteCheckIn, getAllCheckIns } from "../modules/CheckInManager"
import { deleteSelfGratitude, getAllSelfGratitude} from "../modules/SelfGratitudeManager"

export const Portfolio = () => {
const [checkIns, setCheckIns] = useState([]);
const [gratitudes, setGratitudes] = useState([]);

const getCheckins = () => {
return getAllCheckIns().then(checkInsFromAPI =>{
setCheckIns(checkInsFromAPI)
});
};

const getSelfGratitude = () => {
    return getAllSelfGratitude().then(gratitudesFromAPI =>{
        setGratitudes(gratitudesFromAPI)
    });
};

const history = useHistory();

useEffect(()=>{
getCheckins();
getSelfGratitude();
},[])


const handleDeleteGratitude = id => {
    deleteSelfGratitude(id)
    .then(()=>getAllSelfGratitude().then(setGratitudes));
}

const handleDeleteCheckIn = id => {
deleteCheckIn(id)
.then(()=>getAllCheckIns().then(setCheckIns));
}
    return(
        <>
        <div>
        <h2>Hello Micaela</h2>
        <button type="button" className="info-button">info</button>
        <button type="button" className="newCheckin-bttn" onClick={() => {history.push("/portfolio/create")}}>new checkin</button>
        </div>
            <h4>Well-Being</h4>
        <div className="wellbeing-list">
           {checkIns.map(checkIn => < CheckInCard key={checkIn.id} checkIn={checkIn} handleDeleteCheckIn={handleDeleteCheckIn}/>)} 
        </div>
        <aside className="SelfGratitude-list">
            <h5>Self Gratitude</h5>
            <button type="button" className="newGratitude-bttn" onClick={() => {history.push("/portfolio/create2")}}>new gratitude</button>
            {gratitudes.map(gratitude => < SelfGratitudeCard key={gratitude.id} gratitude={gratitude} handleDeleteGratitude={handleDeleteGratitude}/>)}
        </aside>
        </>
    )
}
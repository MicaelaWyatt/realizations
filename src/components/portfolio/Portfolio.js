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
const currentUser = parseInt(sessionStorage.getItem("realization_user"));

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

function portfolioInfo() {
    alert("Welcome to your portfolio.The purpose of the portfolio page is to focus on you. On the left is a list of all your check-Ins.and on the right is a list of your gratitude statements.")
}

function checkInInfo() {
        alert("The concept of Check-ins is to make the most of where you are and who and what you have in life. The purpose of Check-ins is to have a space to pause, reflect, connect, and share intentions. This not only demonstrated openness, but it moves us and the things we are a part of forward.")
    
}

function gratitudeInfo() {
    alert("The purpose of Self Gratitude is to acknowledge your accomplishments. This could be anything from helping an old lady cross the street, to liking how you acted in a certain situation. Seeing your accomplishments can help cultivate a positive attitude, especially when times get tough.")

}

    return(
        <>
        <div>
        <h2>Hello Micaela {currentUser.name}</h2>
        <button type="button" className="info-button" onClick={portfolioInfo} >info</button>
        <button type="button" className="newCheckin-bttn" onClick={() => {history.push("/portfolio/create")}}>new checkin</button>
        </div>
            <h4>Check-ins</h4>
            <button type="button" className="info-button" onClick={checkInInfo} >info</button>    
        <div className="wellbeing-list">
           {checkIns.map(checkIn => {
           if(checkIn.userId === currentUser) {
           return < CheckInCard key={checkIn.id} checkIn={checkIn} handleDeleteCheckIn={handleDeleteCheckIn}/>
        }
    })} 
        </div>
        <aside className="SelfGratitude-list">
            <h5>Self Gratitude</h5>
            <button type="button" className="info-button" onClick={gratitudeInfo} >info</button>
            <button type="button" className="newGratitude-bttn" onClick={() => {history.push("/portfolio/create2")}}>new gratitude</button>
            {gratitudes.map(gratitude =>{ 
            if(gratitude.userId === currentUser){
            return< SelfGratitudeCard key={gratitude.id} gratitude={gratitude} handleDeleteGratitude={handleDeleteGratitude}/>
            }})}
        </aside>
        </>
    )
}
import React, { useEffect, useState } from "react"
import { getAllUsers } from "../modules/UsersManager";

export const UsersName = () => {

    const [users, setUsers] = useState([]);
  
    const currentUser = parseInt(sessionStorage.getItem("realization_user"));

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    }

    useEffect(()=> {
        getUsers();
    },[])

    return(
            <h2 className="portfolio-header">Hello {users.map(user=>{
                if(user.id === currentUser) {
                    return( user.name)
                }
            })} </h2>
    )
}
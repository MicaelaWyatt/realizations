const remoteURL = "http://localhost:8088"

export const getForgivenessById = (forgivenessId) => {
    return fetch(`${remoteURL}/forgiveness/${forgivenessId}`)
    .then(res => res.json())
}

export const getAllForgiveness = () => {
    return fetch(`${remoteURL}/forgiveness`)
    .then(res => res.json())
}

export const deleteForgiveness = (id) => {
    return fetch(`${remoteURL}/forgiveness/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addForgiveness = (newForgiveness) => {
    return fetch(`${remoteURL}/forgiveness`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newForgiveness)
    }).then(res => res.JSON)
}

export const updateForgiveness = (editedForgiveness) => {
    return fetch(`${remoteURL}/forgiveness/${editedForgiveness.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedForgiveness)
    }).then(data => data.json());
  }
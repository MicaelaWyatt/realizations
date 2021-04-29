const remoteURL = "http://localhost:8088"

export const getCheckInById = (checkInId) => {
    return fetch(`${remoteURL}/checkins/${checkInId}`)
    .then(res => res.json())
}

export const getAllCheckIns = () => {
    return fetch(`${remoteURL}/checkins`)
    .then(res => res.json())
}

export const deleteCheckIn = (id) => {
    return fetch(`${remoteURL}/checkins/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addCheckIn = (newCheckIn) => {
    return fetch(`${remoteURL}/checkins`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newCheckIn)
    }).then(res => res.JSON)
}

export const updateCheckIn = (editedCheckIn) => {
    return fetch(`${remoteURL}/checkins/${editedCheckIn.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCheckIn)
    }).then(data => data.json());
  }
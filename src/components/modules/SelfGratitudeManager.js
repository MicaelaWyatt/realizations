const remoteURL = "http://localhost:8088"

export const getCheckInById = (selfGratitudeId) => {
    return fetch(`${remoteURL}/selfGratitude/${selfGratitudeId}`)
    .then(res => res.json())
}

export const getAllCheckIns = () => {
    return fetch(`${remoteURL}/selfGratitude`)
    .then(res => res.json())
}

export const deleteCheckIn = (id) => {
    return fetch(`${remoteURL}/selfGratitude/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addCheckIn = (newselfGratitude) => {
    return fetch(`${remoteURL}/selfGratitude`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newselfGratitude)
    }).then(res => res.JSON)
}

export const updateCheckIn = (editedSelfGratitude) => {
    return fetch(`${remoteURL}/selfGratitude/${editedSelfGratitude.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSelfGratitude)
    }).then(data => data.json());
  }
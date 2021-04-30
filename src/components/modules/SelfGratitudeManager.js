const remoteURL = "http://localhost:8088"

export const getSelfGratitudeById = (selfGratitudeId) => {
    return fetch(`${remoteURL}/selfGratitude/${selfGratitudeId}`)
    .then(res => res.json())
}

export const getAllSelfGratitude = () => {
    return fetch(`${remoteURL}/selfGratitude`)
    .then(res => res.json())
}

export const deleteSelfGratitude = (id) => {
    return fetch(`${remoteURL}/selfGratitude/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addSelfGratitude = (newselfGratitude) => {
    return fetch(`${remoteURL}/selfGratitude`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newselfGratitude)
    }).then(res => res.JSON)
}

export const updateSelfGratitude = (editedSelfGratitude) => {
    return fetch(`${remoteURL}/selfGratitude/${editedSelfGratitude.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSelfGratitude)
    }).then(data => data.json());
  }
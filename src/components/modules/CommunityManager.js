const remoteURL = "http://localhost:8088"

export const getRecommendationById = (recommendedId) => {
    return fetch(`${remoteURL}/recommened/${recommendedId}`)
    .then(res => res.json())
}

export const getAllRecommendations = () => {
    return fetch(`${remoteURL}/recommened`)
    .then(res => res.json())
}

export const deleteRecommendation = (id) => {
    return fetch(`${remoteURL}/recommened/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addRecommendation = (newRecommendation) => {
    return fetch(`${remoteURL}/recommened`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newRecommendation)
    }).then(res => res.JSON)
}

export const updateRecommendation = (editedRecommendation) => {
    return fetch(`${remoteURL}/recommened/${editedRecommendation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRecommendation)
    }).then(data => data.json());
  }
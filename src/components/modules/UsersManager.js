const remoteURL = "http://localhost:8088"

export const getUserById = (Id) => {
    return fetch(`${remoteURL}/users/${Id}`)
    .then(res => res.json())
}

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
}
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const create = user => {
    return fetch('/api/users', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const list = () => {
    return fetch('/api/users/', {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const read = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': 'Bearer ' + credentials.t
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const update = (params, credentials, user) => {
    return fetch('/api/users/' + params.userId, {
        method: 'PUT',
        headers: {
            ...headers,
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const remove = (params, credentials) => {
    return fetch('/api/users/' + params.userId, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Authorization': 'Bearer ' + credentials.t
        },
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export { create, list, read, update, remove }
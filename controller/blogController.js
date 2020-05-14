import { url } from '../config/api'

const getData = (page) => {
    return fetch(`${url}/api/users?page=${page}`)
        .then(response => response.json())
}

export {
    getData
}
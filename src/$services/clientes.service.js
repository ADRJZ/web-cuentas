import Superagent from 'superagent'

const { HOST_API } = _CONSTANTS_

export default {
    createClient,
    getClientes
}


function createClient(data) {
    return new Promise((resolve, reject) => {
        Superagent
            .post(`${HOST_API}/Clientes`)
            .send(data)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}

function getClientes() {
    return new Promise((resolve, reject) => {
        Superagent
            .get(`${HOST_API}/Clientes`)
            .send()
            .end((err, res) => {
                resolve(res.body)
            })
    })
}
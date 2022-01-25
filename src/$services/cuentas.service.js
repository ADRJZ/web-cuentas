import Superagent from 'superagent'

const { HOST_API } = _CONSTANTS_

export default {
    getCuentas,
    createCuenta,
}

function getCuentas(IdCliente) {
    return new Promise((resolve, reject) => {
        Superagent
            .get(`${HOST_API}/Cuentas/${IdCliente}`)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}

function createCuenta(data) {
    return new Promise((resolve, reject) => {
        Superagent
            .post(`${HOST_API}/Cuentas`)
            .send(data)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}


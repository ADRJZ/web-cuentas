import Superagent from 'superagent'

const { HOST_API } = _CONSTANTS_

export default {
    abonar,
    retirar,
    getMovimientosBycuenta
}

function abonar(data) {
    return new Promise((resolve, reject) => {
        Superagent
            .post(`${HOST_API}/Movimientos/Ahorro/Abono`)
            .send(data)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}

function retirar(data) {
    return new Promise((resolve, reject) => {
        Superagent
            .post(`${HOST_API}/Movimientos/Ahorro/Retiro`)
            .send(data)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}

function getMovimientosBycuenta(idCuenta) {
    return new Promise((resolve, reject) => {
        Superagent
            .get(`${HOST_API}/Movimientos/${idCuenta}`)
            .end((err, res) => {
                resolve(res.body)
            })
    })
}

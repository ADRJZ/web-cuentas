import { replace } from 'svelte-spa-router'
import { clienteStore } from './stores'
import StorageService from './$services/storage.service'

export {
    needLogin,
    isLogin
}

async function needLogin(detail) {

    const access = StorageService.getItem('access')
    const cliente = StorageService.getItem('cliente')

    if(cliente)
        clienteStore.set(cliente)

    if(!access || !cliente)
        return true

    replace('#/cuentas')
    return false
}

async function isLogin(detail) {

    const access = StorageService.getItem('access')
    const cliente = StorageService.getItem('cliente')

    if(cliente)
        clienteStore.set(cliente)
        
    if(access && cliente)
        return true

    replace('#/')
    return false
}
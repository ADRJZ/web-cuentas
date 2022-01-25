import { writable } from 'svelte/store'

export const cuentasStore = items([])
export const clientesStore = items([])
export const movimientosStore = items([])



export const clienteStore = writable(null)
export const cuentaStore = writable(null)
export const movimientoStore = writable(null)


export const modalStore = $modalStore()
export const popupStore = $popupStore()

function $modalStore() {

    const store = writable(null)

    store.close = () => store.set(null)

    store.open = (type, prefix = null, data = null) => {

        if(!prefix && !data)
            return store.set(type)
     
        type === 'cuenta' && cuentaStore.set(data)
        type === 'cliente' && clienteStore.set(data)
        type === 'movimiento' && clienteStore.set(data)
        type === 'movimiento_create' && cuentaStore.set(data) //movimiento_depositar
        type === 'movimiento_depositar' && cuentaStore.set(data) 
        type === 'movimiento_retirar' && cuentaStore.set(data) 

        store.set(`${type}_${prefix}`)

    }

    return store
}
function $popupStore() {

    const store = writable(null)

    store.close = () => store.set(null)

    store.open = (type, prefix = null, data = null) => {

        if(!prefix && !data)
            return store.set(type)

        store.set(`${type}_${prefix}`)
    }

    return store
}

function items(state = null) {
    const {subscribe, update, set} = writable(state)
    return {
        subscribe,
        update,
        set,
        append: item => append(item, update),
        replace: item => replace(item, update),
        remove: itemId => remove(itemId, update)
    }
}

function append(item, update) {
    return update(items => {
        items.unshift(item)
        return items
    })
}

function replace(data, update) {
    return update(items => {
        return items.map(item => {
            return item.id === data.id? data : item
        })
    })
}

function remove(itemId, update) {
    return update(items => {
        return items.filter(item => item.id != itemId)
    })
}
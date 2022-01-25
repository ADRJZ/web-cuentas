import { wrap } from 'svelte-spa-router/wrap'
import { needLogin } from './auth'

import LoginView from './users/view.login.svelte'
import ClientesView from './clientes/view.clientes.svelte'
import CuentasView from './cuentas/view.cuentas.svelte'

const routes = {

    '/': wrap({
        component: LoginView,
        conditions: [needLogin]
    }),

    '/clientes': wrap({
        component: ClientesView,
        conditions: [needLogin]
    }),

    '/cuentas': wrap({
        component: CuentasView,
        conditions: [needLogin]
    }),

}

export { routes }
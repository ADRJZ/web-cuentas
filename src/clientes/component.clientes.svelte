<script>

    import { toast } from 'bulma-toast'
    import DateMethod from '../$methods/date.methods'

    import { clientesStore, modalStore } from '../stores'
    import ClientesService from '../$services/clientes.service.js'

    import Spinner from '../$components/spinner.svelte'
    import Message from '../$components/message.svelte'

    let loading = false

    getClientes()

    async function getClientes() {
        loading = true
        const resp = await ClientesService.getClientes()
        loading = false

        if(!resp.success)
            return toast({message: resp.error.message, type: 'is-danger'})

        clientesStore.set(resp.content)
    }

    async function updateClienteDefault(icliente) {
    
        loading = true
        const resp = await ClientesService.updateClienteDefault(icliente._id)
        loading = false
    
        if(!resp.success)
            return toast({message: resp.error.message, type: 'is-danger'})
    
        getClientes()
    }

</script>

<Spinner {loading} />
<Message show={!loading && !$clientesStore.length} />

{#if !loading && $clientesStore.length}
    <div class="table-container">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        <div class="icon-text">
                            <span class="icon">
                              <i class="fas fa-user"></i>
                            </span>
                            <span>Cliente</span>
                        </div>
                    </th>
                    <th>
                        <div class="icon-text">
                            <span class="icon">
                              <i class="fas fa-id-card-alt"></i>
                            </span>
                            <span>Identificacion</span>
                        </div>
                    </th>
                    <th>
                        <div class="icon-text">
                            <span class="icon">
                              <i class="fas fa-calendar"></i>
                            </span>
                            <span>Fecha de Registro</span>
                        </div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each $clientesStore as item}
                    <tr>

                        <td>{ item.nombreCompleto }</td>
                        <td>{ item.numeroIdentificacion }</td>
                        <td>{ DateMethod.dateLarge(item.fechaRegistro) }</td>
                        <td>
                            <button on:click={() => modalStore.open('cliente', 'modal', item)} class="button is-light is-rounded">
                                <span class="icon"><i class="fas fa-eye"></i></span>
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
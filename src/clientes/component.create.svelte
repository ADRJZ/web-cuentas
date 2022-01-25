<script>

    import { toast } from 'bulma-toast'

    import { clientesStore, modalStore } from '../stores'
    import ClientesService from '../$services/clientes.service.js'

    import Spinner from '../$components/spinner.svelte'

    let data = {}
    let loading = false

    async function createCliente() {

        loading = true
        const resp = await ClientesService.createClient(data)
        loading = false

        if(!resp.success)
            return toast({message: resp.error.message, type: 'is-danger'})

        data = {}
        clientesStore.append(resp.content)
        
        toast({message: 'Nuevo Cliente creado', type: 'is-success'})
        modalStore.close()
    }

</script>

<Spinner {loading} />

{#if !loading}
    <form on:submit|preventDefault={createCliente}>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <p>Nombre</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-ruler-horizontal"></i></span>
                        <input bind:value={data.nombre} type="text" class="input is-rounded" placeholder="Nombre" required>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <p>Apellido Paterno</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-ruler-vertical"></i></span>
                        <input bind:value={data.apellidoPaterno} type="text" class="input is-rounded" placeholder="Apellido Paterno" required>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <p>Apellido Materno</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-ruler-vertical"></i></span>
                        <input bind:value={data.apellidoMaterno} type="text" class="input is-rounded" placeholder="Apellido Materno" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <p>Identificacion</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-ruler"></i></span>
                        <input bind:value={data.identificacion} type="text" class="input is-rounded" placeholder="Identificacion" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="items-end">
            <button on:click={() => modalStore.close() } type="button" class="button is-light space-right is-rounded">
                <span class="icon"><i class="fas fa-ban"></i></span>
                <span>Cancelar</span>
            </button>
            <button type="submit" class="button shadow is-primary is-rounded">
                <span class="icon"><i class="fas fa-save"></i></span>
                <span>Guardar</span>
            </button>
        </div>
    </form>
{/if}
<script>

    import { toast } from 'bulma-toast'

    import { cuentasStore, modalStore } from '../stores'
    import CuentasService from '../$services/cuentas.service.js'
    import Select from '../$components/select.svelte'

    import Spinner from '../$components/spinner.svelte'
    export let cliente = {}

    let data = {}
    let loading = false

    async function createCuenta() {
        
        data.idCliente = cliente.id
        data.saldo = data.saldo ? data.saldo : 0.0
        data.tipocuenta = data.tipocuenta ? data.tipocuenta : 2001
        
        loading = true
        const resp = await CuentasService.createCuenta(data)
        loading = false

        if(!resp.success)
            return toast({message: resp.error.message, type: 'is-danger'})

        data = {}
        cuentasStore.append(resp.content)
        
        toast({message: 'Cuentao Agregado Al Inventario', type: 'is-success'})
        modalStore.close()
    }

</script>

<Spinner {loading} />

{#if !loading}
    <form on:submit|preventDefault={createCuenta}>
        <div class="columns">
            <div class="column">
                <p>Nombre de la Cuenta</p>
                <div class="field">
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-box"></i></span>
                        <input bind:value={data.nombrecuenta} type="text" class="input is-rounded" placeholder="Nombre de la Cuenta" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <p>Tipo de Cuenta</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-money-bill-alt"></i></span>
                        <Select bind:value={data.tipocuenta}  text='Seleccione tipo de cuenta'
                        options={[
                            {value: 2001, text: 'Cuenta de Ahorro'}
                            // {value: 2002, text: 'cuenta de Credito'},
                            // {value: 2003, text: 'Fecha personalizada'}      
                        ]} required/>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <p>Saldo Inicial</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-dollar-sign"></i></span>
                        <input bind:value={data.saldo} type="number" class="input is-rounded" placeholder="Saldo Inicial">
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
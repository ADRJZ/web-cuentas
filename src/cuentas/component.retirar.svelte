<script>

    import { toast } from 'bulma-toast'

    import { cuentaStore, cuentasStore, movimientosStore, modalStore } from '../stores'
    import MovimientosService from '../$services/movimientos.service'

    import Spinner from '../$components/spinner.svelte'

    let data = {}
    let loading = false

    async function retirar() {
        
        data.numeroCuenta = $cuentaStore.numeroCuenta
        loading = true
        const resp = await MovimientosService.retirar(data)
        loading = false
        
        if(!resp.success)
        return toast({message: resp.content, type: 'is-danger'})
        
        let cuenta = $cuentaStore
        cuenta.saldo = Math.round((cuenta.saldo - data.cantidad) * 100) / 100; 

        cuentasStore.replace($cuentaStore, cuenta)
        data = {}

        movimientosStore.append(resp.content)
        
        toast({message: 'Retiro Exitoso', type: 'is-success'})
        modalStore.close()
    }

</script>

<Spinner {loading} />

{#if !loading}
    <form on:submit|preventDefault={retirar}>
        <div class="columns">
            <div class="column">
                <div class="field"><p>Concepto</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-box"></i></span>
                        <input bind:value={data.concepto} type="text" class="input is-rounded" placeholder="Concepto del Retiro" required>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field"><p>Usuario que retira</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-box"></i></span>
                        <input bind:value={data.usuario} type="text" class="input is-rounded" placeholder="Quien Retira" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="field"><p>Cantidad a retirar</p>
                    <div class="control has-icons-left">
                        <span class="icon"><i class="fas fa-dollar-sign"></i></span>
                        <input bind:value={data.cantidad} type="number" min=0 step=0.01 class="input is-rounded" placeholder="Cantidad a Retirar" required>
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
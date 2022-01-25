<script>
import DateMethod from '../$methods/date.methods'


import MovimientosService from "../$services/movimientos.service";
import { cuentaStore, movimientosStore, modalStore } from "../stores";
let loading = true
getMovimientsByCuenta()

async function getMovimientsByCuenta(){
    console.log($cuentaStore.id)
    loading = true
    const resp = await MovimientosService.getMovimientosBycuenta($cuentaStore.id)
	if (!resp.success)
		return toast({ message: resp.error.message, type: "is-danger" });

        movimientosStore.set(resp.content);

    loading = false
}

</script>


{#if !loading}

<div class="table-container">
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>
                    <div class="icon-text">
                        <span>Tipo de Movimiento</span>
                    </div>
                </th>
                <th>
                    <div class="icon-text">
                        <span>Concepto</span>
                    </div>
                </th>
                <th>
                    <div class="icon-text">
                        <span>Monto</span>
                    </div>
                </th>
                <th>
                    <div class="icon-text">
                        <span>Fecha</span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            {#each $movimientosStore as item}
                <tr>
                    <td>{item.tipoMovimiento === 0 ? 'ABONO' : 'CARGO' }</td>
                    <td>{item.concepto}</td>
                    <td>${item.cantidad}</td>
                    <td>{DateMethod.dateLarge(item.fechaRegistro)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
{/if}
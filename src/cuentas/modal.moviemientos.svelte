<script>
	import {cuentaStore, modalStore} from "../stores";

	import Modal from '../$components/modal.svelte'
	
	import MovimientosCuenta from "./component.movimientos.svelte";
	$: show = $modalStore === "movimiento_create_modal";

</script>

<Modal title="Movimientos de la cuenta" {show}>
	<MovimientosCuenta cuenta= {$cuentaStore} />
</Modal>

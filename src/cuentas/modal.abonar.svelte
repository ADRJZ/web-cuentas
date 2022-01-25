<script>
	import {cuentaStore, modalStore} from "../stores";

	import Modal from '../$components/modal.svelte'
	
	import AbonarComponent from "./component.depositar.svelte";
	$: show = $modalStore === "movimiento_depositar_modal";

</script>

<Modal title="Abonar a Cuenta" {show}>
	<AbonarComponent cuenta= {$cuentaStore} />
</Modal>

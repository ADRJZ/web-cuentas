<script>
	import {cuentaStore, modalStore} from "../stores";

	import Modal from '../$components/modal.svelte'
	
	import RetirarComponent from "./component.retirar.svelte";
	$: show = $modalStore === "movimiento_retirar_modal";

</script>

<Modal title="Retirar a Cuenta" {show}>
	<RetirarComponent cuenta= {$cuentaStore} />
</Modal>

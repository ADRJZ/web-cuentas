<script>
	import {clienteStore, modalStore} from "../stores";

	import Modal from '../$components/modal.svelte'
	
	import CuentaCreateComponent from "./component.create.svelte";
	$: show = $modalStore === "cuenta_create_modal";

</script>

<Modal title="Agregar Cuenta" {show}>
	<CuentaCreateComponent cliente= {$clienteStore} />
</Modal>

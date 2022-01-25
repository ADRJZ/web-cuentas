<script>
	import { modalStore } from "../stores";

	import Modal from "../$components/modal.svelte";
	import ClienteCreateComponent from "./component.create.svelte";

	$: show = $modalStore === "cliente_create_modal";
</script>

<Modal title="Agregar Cliente" {show}>
	<ClienteCreateComponent />
</Modal>

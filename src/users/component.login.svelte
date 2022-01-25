<script>
	import { replace } from "svelte-spa-router";
	import { toast } from "bulma-toast";
	import { clienteStore } from "../stores";

	import ClientsService from "../$services/clientes.service";
	import Spinner from "../$components/spinner.svelte";

	let data = {};
	let loading = false;

	async function createClient() {
		loading = true;
		const resp = await ClientsService.createClient(data);
		loading = false;

		if (resp.status !== 201)
			return toast({ message: resp.error.message, type: "is-danger" });

		clienteStore.set(resp.content);
		console.log(resp.content);
		replace("#/clientes");
	}
</script>

<Spinner {loading} />
{#if !loading}
	<form on:submit|preventDefault={createClient}>
		<div class="field">
			<p>Nombre</p>
			<div class="control has-icons-left" id="nombre">
				<span class="icon"><i class="fas fa-user" /></span>
				<input
					bind:value={data.nombre}
					type="text"
					class="input is-rounded"
					placeholder="Nombre"
					required
				/>
			</div>
		</div>
		<div class="field">
			<p>Apellido Paterno</p>
			<div class="control has-icons-left" id="apellidoPaterno">
				<span class="icon"><i class="fas fa-lock" /></span>
				<input
					bind:value={data.apellidoPaterno}
					type="text"
					class="input is-rounded"
					placeholder="Apellido Paterno"
					required
				/>
			</div>
		</div>
		<div class="field">
			<p>Apellido Materno</p>
			<div class="control has-icons-left" id="apellidoMaterno">
				<span class="icon"><i class="fas fa-lock" /></span>
				<input
					bind:value={data.apellidoMaterno}
					type="text"
					class="input is-rounded"
					placeholder="Apellido Materno"
					required
				/>
			</div>
		</div>
		<div class="field">
			<p>Identificacion</p>
			<div class="control has-icons-left" id="identificacion">
				<span class="icon"><i class="fas fa-lock" /></span>
				<input
					bind:value={data.identificacion}
					type="text"
					class="input is-rounded"
					placeholder="Identificacion"
					required
				/>
			</div>
		</div>
		<div class="buttons items-center">
			<button type="submit" class="button shadow is-primary   ">
				<span class="icon"><i class="fas fa-sign-in-alt" /></span>
				<span>Crear Cliente</span>
			</button>

		</div>
	</form>
{/if}

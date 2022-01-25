<script>
	import Select from "../$components/select.svelte";
	import { toast } from "bulma-toast";
	import {clienteStore, clientesStore, cuentasStore, modalStore } from "../stores";
	import CuentaService from "../$services/cuentas.service";
	import ClientesService from "../$services/clientes.service";
	import Message from "../$components/message.svelte";

	let loading = false;
	let metadata = {};
	let cliente = {};
	let clientsOptions = [];
	let query = {
		page: 0,
		find: null,
	};

	getClientes();

	async function getClientes() {
		loading = true;
		const resp = await ClientesService.getClientes();
		if (!resp.success)
			return toast({ message: resp.error.message, type: "is-danger" });

		clientesStore.set(resp.content);
		$clientesStore.forEach((element) => {
			clientsOptions.push({
				value: element,
				text: element.nombreCompleto,
			});
		});

		loading = false;
	}

	async function getCuentasByCliente() {
		loading = true;
		const resp = await CuentaService.getCuentas(cliente.id);
		loading = false;

		if (!resp.success)
			return toast({ message: resp.error.message, type: "is-danger" });

		clienteStore.set(cliente)
		cuentasStore.set(resp.content);
	}
</script>

<Message show={!loading && !$cuentasStore.length} />

{#if !loading && $clientesStore.length}
	<div class="items-space">
		<Select
			on:change={getCuentasByCliente}
			bind:value={cliente}
			options={clientsOptions}
			text={"Seleccione un cliente"}
		/>
	</div>
{/if}

{#if !loading && $cuentasStore.length}

	<div class="items-end">
        <button on:click={() => modalStore.open('cuenta_create','modal')} class="button is-light is-rounded">
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span>Agregar Cuenta Ahorro</span>
        </button>
        <br>
    </div>
	<br>


	<div class="table-container">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>
						<div class="icon-text">
							<span class="icon">
								<i class="fas fa-user" />
							</span>
							<span>Numero de cuenta</span>
						</div>
					</th>
					<th>
						<div class="icon-text">
							<span class="icon">
								<i class="fas fa-id-card-alt" />
							</span>
							<span>Nombre de Cuenta</span>
						</div>
					</th>
					<th>
						<div class="icon-text">
							<span class="icon">
								<i class="fas fa-calendar" />
							</span>
							<span>Tipo de cuenta</span>
						</div>
					</th>

					<th>
						<div class="icon-text">
							<span class="icon">
								<i class="fas fa-dollar-sign" />
							</span>
							<span>Saldo</span>
						</div>
					</th>
					<th>
						<div class="icon-text">
							<span class="icon">
								<i class="fas fa-edit" />
							</span>
							<span>Acciones</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each $cuentasStore as item}
					<tr>
						<td>{item.numeroCuenta}</td>
						<td>{item.nombreCuenta}</td>
						<td>{item.tipoCuenta}</td>
						<td>{item.saldo}</td>
						<td>
							<button on:click={() => modalStore.open('movimiento_create', 'modal', item)} class="button is-light is-rounded" title="Ver Movimientos">
                                <span class="icon"><i class="fas fa-credit-card"></i></span>
                            </button>

							<button on:click={() => modalStore.open('movimiento_depositar', 'modal', item)} class="button is-light is-rounded" title="Depositar">
                                <span class="icon"><i class="fas fa-plus-square"></i></span>
                            </button>

							<button on:click={() => modalStore.open('movimiento_retirar', 'modal', item)} class="button is-light is-rounded" title="Retirar">
                                <span class="icon"><i class="fas fa-minus-square"></i></span>
                            </button>

						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<script>
	import { replace, location } from "svelte-spa-router";

	import StorageService from "../$services/storage.service";

	function showView(view) {
		replace(`#/${view}`);
	}

	function onLogout() {
		StorageService.deleteItem("user");
		StorageService.deleteItem("access");
		replace("#/");
	}
</script>


<div class="container">
	<div class="web">
		<nav class="menu items-space">
			<div class="items-space">
				<img
					src="images/inventarios.png"
					alt="Inventarios"
					style="width:20%; padding:16px;"
				/>
			</div>
			<div class="items-space">
				<div
					on:click={() => showView("clientes")} class="menu-item" class:active={$location === "/#"}>
					<span class="icon is-medium">
						<i class="fas fa-calculator" />
					</span>
					<small>Clientes</small>
				</div>

				<div
					on:click={() => showView("cuentas")} class="menu-item" class:active={$location === "/#"}>
					<span class="icon is-medium">
						<i class="fas fa-calculator" />
					</span>
					<small>Cuentas</small>
				</div>
				<div>
				</div>
			</div>
		</nav>
	</div>
</div>

<style>
	.menu {
		background: #000000;
	}

	.web {
		display: block;
	}

	.menu-item {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding: 16px;
		cursor: pointer;
		color: whitesmoke;
	}

	.menu-item small {
		color: whitesmoke;
	}

	.menu-item:hover * {
		color: #63e655;
	}

	.menu-item.active * {
		color: #63e655;
	}

	@media (max-width: 862px) {
		.mobile {
			display: block;
		}

		.web {
			display: none;
		}
	}
</style>

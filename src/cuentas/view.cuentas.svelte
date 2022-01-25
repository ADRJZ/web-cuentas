<script>
	
	import { modalStore } from '../stores'
	import Menu from '../$layouts/menu.layout.svelte'
	import Container from '../$layouts/container.layout.svelte';
	import CuentaComponent from './component.cuentas.svelte';
	import CuentaCreateModal from './modal.create.svelte'
	import CuentaDepositarModal from './modal.abonar.svelte'
	import CuentaRetirarModal from './modal.retirar.svelte'
	import MovimientosCuentaModal from './modal.moviemientos.svelte'
</script>

<Menu />
<CuentaRetirarModal />
<CuentaDepositarModal />
<CuentaCreateModal />
<MovimientosCuentaModal />
<Container>
	<!-- <div class="items-end">
        <button on:click={() => modalStore.set('cuenta_create_modal')} class="button is-light is-rounded">
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span>Agregar Cuenta Ahorro</span>
        </button>
        <br>
    </div>
	<br> -->
	<CuentaComponent />
</Container>

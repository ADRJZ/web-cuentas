<script>

    import { modalStore } from '../stores'

    import Menu from '../$layouts/menu.layout.svelte'
    import Container from '../$layouts/container.layout.svelte'
    import ClienteModal from './modal.cliente.svelte'

    import ClientesComponent from './component.clientes.svelte'
    import ClienteCreateModal from './modal.create.svelte'

</script>

<Menu />

<ClienteCreateModal />
<ClienteModal />

<Container>

    <div class="items-end">
        <button on:click={() => modalStore.set('cliente_create_modal')} class="button is-light is-rounded">
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span>Crear Cliente</span>
        </button>
        <br>
    </div>
    <br>
    <ClientesComponent />

</Container>
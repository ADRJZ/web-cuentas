<script>

    import { clienteStore, modalStore } from '../stores'

    import Modal from '../$components/modal.svelte'
    import ClienteComponent from './component.cliente.svelte'

    $: show = $modalStore === 'cliente_modal'
    
</script>


<Modal title="Cliente" {show}>
    <ClienteComponent data={$clienteStore} />
</Modal>
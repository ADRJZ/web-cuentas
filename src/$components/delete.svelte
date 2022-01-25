<script>

    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let loading = false
    export let fullwidth = true

    export let icon = 'trash'
    export let text = 'Borrar'

    let isClick = false

    function onClick() {

        if(!isClick) {
            
            setTimeout(() => {
                isClick = false
            }, 2000)
            
            return isClick = true
        }

        dispatch('confirm')
    }
    
</script>

<button on:click={onClick} type="button" class="button " class:is-light={!isClick} class:is-fullwidth={fullwidth} class:is-danger={isClick} class:is-loading={loading}>
    <span class="icon"><i class="fas fa-{icon}"></i></span>
    {#if isClick}
        <span>Click para confirmar</span>
    {:else}
        <span>{text}</span>
    {/if}
</button>
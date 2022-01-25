<script>
    
    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { popupStore } from '../stores'

    const dispatch = createEventDispatcher()

    export let url = ''
    export let show = false

    function onClose() {
        popupStore.close()
        dispatch('close')
    }

    window.onkeydown = function(event) {
        if(event.keyCode === 27)
            onClose()
    }

</script>

<style>
    
    .card {
        background-color: #D6E5FF;
        padding: 5%;
        border-radius: 5px;
    }

</style>

{#if show}
<div class="modal back-color" class:is-active={show} in:fade>
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="card">
            <slot></slot>
            <div class="items-space space-top">
                <button on:click={onClose} class="button is-success is-inverted is-rounded">
                    <span>¡Entendido!</span>
                </button>
                <a href="{url}" target="blank">
                    <button class="button is-rounded is-primary">
                        <span>Saber más</span>
                        <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
{/if}
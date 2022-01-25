<script>
    
    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { modalStore } from '../stores'

    const dispatch = createEventDispatcher()

    export let title = ''
    export let show = false
    export const data = {}

    function onClose() {
        modalStore.close()
        dispatch('close')
    }

    window.onkeydown = function(event) {
        if(event.keyCode === 27)
            onClose()
    }

</script>

{#if show}
<div class="modal" class:is-active={show} in:fade>
    <div on:click={onClose} class="modal-background"></div>
    <div class="modal-card">
        <div class="modal-card-head">
            <div class="modal-card-title">{ title }</div>
            <button on:click={onClose} class="delete" aria-label="close"></button>
        </div>
        <div class="modal-card-body">
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
        <div class="modal-card-foot items-end">
            <slot name="footer"></slot>
        </div>
    </div>
</div>
{/if}
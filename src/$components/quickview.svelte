<script>

    import { slide, fade } from 'svelte/transition'

    export let show = false
    export let title = ''

    function onClose() {
        show = false
    }

</script>

<style>

    .quickview {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 7;
    }

    .quickview-background {
        position: absolute;
        right: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 8;
    }

    .card.quickview {
        height: 98vh;
        z-index: 9;
        width: 40vw;
        border-radius: 0 0 0 16px;
        overflow: auto;
    }

    @media (max-width: 600px) {
        .card.card.quickview {
            width: 90vw;
        }
    }

</style>

{#if show}
    <div class="quickview">
        <div on:click={onClose} class="quickview-background" in:fade></div>
        <div class="card quickview" in:slide>
            <header class="card-header">
                <p class="card-header-title">{ title }</p>
                <div on:click={onClose} class="card-header-icon">
                    <span class="icon"><i class="fas fa-times-circle" aria-hidden="true"></i></span>
                </div>
            </header>
            <div class="card-content">
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
{/if}
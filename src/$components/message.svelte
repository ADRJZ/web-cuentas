<script>
    export let message = 'Sin resultados'
    export let show = false
</script>

{#if message && show}
    <div class="notification">
        { message }
    </div>
{/if}
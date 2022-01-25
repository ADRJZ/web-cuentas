<script>

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let iconType = 'fa'
    export let text = ''
    export let options = []
    export let label = null
    export let icon = null
    export let value = null
    export let rounded = false

    function onChange() {
        dispatch('select', value)
    }

</script>

<style>
    .select {
        min-width: 100%;
    }

    .select select {
        min-width: 100%;
    }

</style>

<div class="field">
    {#if label}
        <label for="" class="label">{ label }</label>
    {/if}
    <div class="control" class:has-icons-left={ icon }>
        {#if icon}
            <span class="icon"><i class="fas { iconType }-{ icon }"></i></span>
        {/if}
        <div class="select" class:is-rounded={rounded}>
            <select bind:value={value} on:change={onChange} on:change class:is-invalid={ !value } >
                <option value="">{ text || 'Selecciona una opción'}</option>
                {#each options as option}
                    <option value="{ option.value }">{ option.text }</option>
                {/each}
            </select>
        </div>
    </div>
</div>
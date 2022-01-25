<script>

    import { fly } from 'svelte/transition'

    export let headers = []
    export let rows = []
    export let inModal = false
    export let expanded = null

    function toggleRow(index) {
        expanded = index
    }

</script>

<style>
    thead tr {
        cursor: default;
    }

    tr {
        cursor: pointer;
        display: grid;
    }

    .expanded {
        display: grid;
        grid-column: 1/-1;
    }

</style>

<div class="items-end"><small>{ rows.length } Resultados</small></div>
<div class="table-container" class:table-modal={inModal}>
    <table class="table is-fullwidth is-hoverable">
        <thead>
            <tr style="grid-template-columns: repeat({headers.length}, 1fr);">
                {#each headers as header}
                    <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
        {#each rows as row, index }
            <tr on:click={() => toggleRow(index)} on:dblclick={() => toggleRow(null)} 
                style="grid-template-columns: repeat({headersth}, 1fr);">
                {#each row as value, inerIndex}
                    {#if inerIndex < row.length-1}
                        <td>{value}</td>
                    {:else}
                        {#if index === expanded}
                            <td>
                                <svelte:component this={value.component} {...value.props} />
                            </td>
                        {/if}
                    {/if}
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</div>
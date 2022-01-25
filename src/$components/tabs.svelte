<script>

    export let options = [] // [{key: String, name: String, icon: String}]
    export let selected = ''
    export let size = ''

</script>

<div class="tabs {size}">
    <ul>
        {#each options as option}
            <li on:click={() => selected = option.key} class:is-active={selected === option.key}>
                <a>
                    {#if option.icon}
                        <span class="icon"><i class="fas fa-{option.icon}"></i></span>
                    {/if}
                    {#if option.name}
                        <span>{option.name}</span>
                    {/if}
                </a>
            </li>
        {/each}
    </ul>
</div>
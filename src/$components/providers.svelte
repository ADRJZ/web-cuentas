<script>

    export let provider = 'Estafeta'
    export let service = 'Terrestre'

    let services = []

    const providers = [
        'Estafeta',
        'Redpack',
        'DFExpress'
    ]

    const servicesList = {
        Estafeta: [
            'Terrestre',
            'Express'
        ],
        Redpack: [
            'Ecoexpress',
            'Express'
        ],
        DFExpress: [
            'Express'
        ]
    }

    setServices()

    function setServices() {
        services = servicesList[provider]
        service = services[0]
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


<div class="columns">
    <div class="column">
        <div class="field">
            <div class="control">
                <div class="select is-rounded">
                    <select bind:value={provider} on:change={setServices}>
                        {#each providers as providerItem}
                            <option value="{ providerItem }">{ providerItem }</option>
                        {/each}
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="field">
            <div class="control">
                <div class="select is-rounded">
                    <select bind:value={service}>
                        {#each services as serviceItem}
                            <option value="{ serviceItem }">{ serviceItem }</option>
                        {/each}
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
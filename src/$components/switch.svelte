<script>

    export let label;
    export let checked;

</script>

<style>
        
    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
    }

    input[type="checkbox"]:focus {
        outline: 0;
    }

    .toggle {
        height: 22px;
        width: 42px;
        border-radius: 16px;
        display: inline-block;
        position: relative;
        margin: 0;
        border: solid 2px hsl(0, 0%, 80%);
        background: hsl(0, 0%, 80%);
        transition: all .2s ease;
    }

    .toggle:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: hsl(0, 0%, 97%);
        box-shadow: 0 1px 2px rgba(44,44,44,.2);
        transition: all .2s cubic-bezier(.5,.1,.75,1.35);
    }

    .toggle:checked {
        border-color: #1d3557;
        background: #1d3557;
    }

    .toggle:checked:after {
        transform: translatex(20px);
    }

</style>

<div class="items-start">
    <input bind:checked type="checkbox" class="toggle">
    {#if label}
        <label for="" class="label space-left">{ label }</label>
    {/if}
</div>
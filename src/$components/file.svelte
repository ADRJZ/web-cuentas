<script>

    export let file = null
    export let required = true

    $: files? file = files[0] : null
    let files;

</script>

<div class="file has-name is-fullwidth">
    <label class="file-label">
        <input bind:files class="file-input" type="file" name="resume" {required}>
        <span class="file-cta">
            <span class="file-icon"><i class="fas fa-upload"></i></span>
            <span class="file-label">Selecciona</span>
        </span>
        <span class="file-name">{ file? file.name : 'No se ha selecciona un archivo' }</span>
    </label>
</div>
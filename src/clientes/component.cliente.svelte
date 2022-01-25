<script>

    export let data = null

</script>

<div class="table-container">
    <table class="table is-fullwidth is-hoverable">
        <tbody>
            <tr>
                <th>Nombre</th>
                <td>{ data.nombre }</td>
            </tr>

            <tr>
                <th>Apellido Paterno</th>
                <td>{ data.apellidoPaterno }</td>
            </tr>

            <tr>
                <th>Apellido Materno</th>
                <td>{ data.apellidoMaterno }</td>
            </tr>

            <tr>
                <th>Identificacion</th>
                <td>{ data.numeroIdentificacion }</td>
            </tr>

            <tr>
                <th>Fecha de Registro</th>
                <td>{ data.fechaRegistro }</td>
            </tr>

        </tbody>
    </table>
</div>
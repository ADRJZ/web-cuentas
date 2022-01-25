<script>

    //https://github.com/6eDesign/svelte-calendar
    import Datepicker from 'svelte-calendar'
    import Moment from 'moment'

    Moment.updateLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sept_Oct_Nov_Dic'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom_Lun_Mar_Mier_Jue_Vier_Sab'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
    });

    export let selected = Moment().toDate()
    export let startDate = Moment().subtract(1, 'year').startOf('day').toDate()
    export let endDate = Moment().add(1, 'year').endOf('day').toDate()
    export let label = null

    const daysOfWeek = [
        ['Domingo', 'Dom'],
        ['Lunes', 'Lun'],
        ['Martes', 'Mar'],
        ['Miercoles', 'Mier'],
        ['Jueves', 'Jue'],
        ['Viernes', 'Vier'],
        ['Sabado', 'Sab']
    ]

    const monthsOfYear = [
        ['Enero', 'Ene'],
        ['Febrero', 'Feb'],
        ['Marzo', 'Mar'],
        ['Abril', 'Abr'],
        ['Mayo', 'May'],
        ['Junio', 'Jun'],
        ['Julio', 'Jul'],
        ['Agosto', 'Ago'],
        ['Septiembre', 'Sep'],
        ['Octubre', 'Oct'],
        ['Noviembre', 'Nov'],
        ['Diciembre', 'Dic']
    ]

    function format(value) {
        return Moment(value).locale('es').format('dddd DD MMMM YYYY')
    }

</script>

<div class="field">
    {#if label}
        <label for="" class="label">{label}</label>
    {/if}
    <div class="control">
        <Datepicker 
            bind:selected={selected}
            start={startDate} 
            end={endDate} 
            {daysOfWeek} 
            {monthsOfYear} 
            {format} 
            style="width: 100%;" />
    </div>
</div>
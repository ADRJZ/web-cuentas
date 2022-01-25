import Moment from 'moment'

Moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sept_Oct_Nov_Dic'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mier_Jue_Vier_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});

export default {
    hourShort,
    hourLarge,
    dateShort,
    dateLarge,
    dateTimeShort,
    dateTimeLarge,
    isBefore,
    isAfter
}

function hourShort(value) {
    return Moment(value).locale('es').format('hh:mm.a')
}

function hourLarge(value) {
    return Moment(value).locale('es').format('hh:mm:ss a')
}

function dateShort(value) {
    return Moment(value).locale('es').format('DD.MMM.YYYY')
}

function dateLarge(value) {
    return Moment(value).locale('es').format('dddd DD MMMM YYYY')
}

function dateTimeShort(value){
    return Moment(value).locale('es').format('DD.MMM.YYYY hh:mm.a')
}

function dateTimeLarge(value){
    return Moment(value).locale('es').format('dddd DD MMMM YYYY hh:mm a')
}

function isBefore(value, ref = new Date()) {
    return Moment(value).isBefore(ref)
}

function isAfter(value, ref = new Date()) {
    return Moment(value).isAfter(ref)
}
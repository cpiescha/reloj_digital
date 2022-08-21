const mostrarReloj = () => { //funcion flecha que recuperalos datos del reloj
let fecha = new Date();
let hora = formatohora(fecha.getHours());
let minutos = formatohora(fecha.getMinutes());
let segundos = formatohora(fecha.getSeconds());
document.getElementById('hora').innerHTML =`${hora}:${minutos}:${segundos}`;//se agrega el texto en el div

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','septiembre','octubre','noviembre', 'diciembre'];
const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

let diasemana = dias[fecha.getDay()];// funcion devuleve un numero y lo asocia con el array para que nos devuleva la fecha

let dia = fecha.getDate();

let mes = meses[fecha.getMonth()];

let fechatexto = `${diasemana}, ${dia} ${mes}`;

document.getElementById('fecha').innerHTML=fechatexto;

document.getElementById('contenedor').classList.toggle('animar'); //permite que se muestre un efecto cuando aumentan los segundos
}
const formatohora = (hora) =>{// funcion flecha que reinicia los segundo cuando aumentan los minutos
    if(hora<10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);// muestra la funcion en intervalos de un segundo
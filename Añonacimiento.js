prompt('BIENVENIDOS A LA VIDENTE ¿QUIERES SABER EL AÑO QUE NACISTE?')

if ("0") {
    alert( 'SEGURO?' );
  }

let name = prompt('COMO TE LLAMAS?');
let age = prompt('QUE EDAD TIENES ?');

const currentDate = new Date();
const year = currentDate.getFullYear() - Number(age);

document.getElementById('content').innerHTML = `<h2>YA LO CALCULAMOS ${name} ${age}.<h2/><h3>NACISTE EL AÑO ${year}.</h3>`;

let NOTA = prompt('PON NOTA + 5 SI TE GUSTO EL TRUCO O - 5 SI NO TE GUSTO EL TRUCO?');
do {
    i += 1;
    document.write(i);
 } while (i < 5);

 
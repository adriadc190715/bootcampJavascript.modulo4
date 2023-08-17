const numTurno = (document.querySelector(".numero-turno"));
const elegirTurno = document.getElementById('elegir-turno') ;

let numInicio = 1;

function actualizarTurno(){
   
   if (numTurno !== null && numTurno !== undefined ) {
      numTurno.textContent = numInicio.toString().padStart(2, '0');
     }
   
}
function siguienteTurno() {
   numInicio++;
   actualizarTurno();
}
function anteriorTurno() {
   if (numInicio >= 1) {
      numInicio--;
    }
   actualizarTurno();
 }

function resetTurno() {
   numInicio = 1;
   actualizarTurno();
}



function elegirTurnos() {
   if (elegirTurno !== null && elegirTurno !== undefined && elegirTurno instanceof HTMLInputElement){
      const turnoElegido = parseInt(elegirTurno.value, 10);

   if (!isNaN(turnoElegido) && turnoElegido >= 1) {
     numInicio = turnoElegido;
     actualizarTurno();
   }
 }
 }

const btnTurnoSigu = document.getElementById('btnTurnoSigu');
const btnTurnoAntr = document.getElementById('btnTurnoAntr');
const btnReset = document.getElementById('btnReset');
const btnElegir = document.getElementById('btnElegir');


if (btnTurnoSigu!== null && btnTurnoSigu!== undefined && btnTurnoSigu instanceof HTMLButtonElement) {
   btnTurnoSigu.addEventListener("click", siguienteTurno);
   }
if ( btnTurnoAntr!== null && btnTurnoAntr!== undefined && btnTurnoAntr instanceof HTMLButtonElement){
   btnTurnoAntr.addEventListener('click', anteriorTurno);
   }   
if (btnReset!== null && btnReset!== undefined && btnReset instanceof HTMLButtonElement){
   btnReset.addEventListener('click', resetTurno);
   }
if (btnElegir!== null && btnElegir!== undefined && btnElegir instanceof HTMLButtonElement){
   btnElegir.addEventListener('click', elegirTurnos);
   }



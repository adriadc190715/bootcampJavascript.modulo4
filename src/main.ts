const numTurno = (document.querySelector(".numero-turno")as HTMLInputElement);
const ElegirTurno = document.getElementById('elegir-turno') as HTMLInputElement;

let numInicio = 1;

function actualizarTurno(){
   numTurno.textContent = numInicio.toString().padStart(2, '0');
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



function elegirTurno() {
   const turnoElegido = parseInt(ElegirTurno.value, 10);
   if (!isNaN(turnoElegido) && turnoElegido >= 1) {
     numInicio = turnoElegido;
     actualizarTurno();
   }
 }

const btnTurnoSigu = document.getElementById('btnTurnoSigu') as HTMLButtonElement;
const btnTurnoAntr = document.getElementById('btnTurnoAntr') as HTMLButtonElement;
const btnReset = document.getElementById('btnReset') as HTMLButtonElement;
const btnElegir = document.getElementById('btnElegir') as HTMLButtonElement;

btnTurnoSigu.addEventListener('click', siguienteTurno);
btnTurnoAntr.addEventListener('click', anteriorTurno);
btnReset.addEventListener('click', resetTurno);
btnElegir.addEventListener('click', elegirTurno);
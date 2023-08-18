let numInicio = 1;

function actualizarTurno(numero: number) {
   const numTurno = document.querySelector(".numero-turno") as HTMLHeadingElement;

   if (numTurno) {
      numTurno.textContent = numero.toString().padStart(2, '0');
   }
}

function siguienteTurno() {
   numInicio++;
   actualizarTurno(numInicio);
}

function anteriorTurno() {
   if (numInicio >= 1) {
      numInicio--;
   }
   actualizarTurno(numInicio);
}

function resetTurno() {
   numInicio = 1;
   actualizarTurno(numInicio);
}

function elegirTurnos() {
   const elegirTurno = document.getElementById('elegir-turno') as HTMLInputElement;

   if (elegirTurno !== null && elegirTurno instanceof HTMLInputElement) {
      const turnoElegido = parseInt(elegirTurno.value, 10);

      if (!isNaN(turnoElegido) && turnoElegido >= 1) {
         numInicio = turnoElegido;
         actualizarTurno(numInicio);
      }
   }
}

const btnTurnoSigu = document.getElementById('btnTurnoSigu') as HTMLButtonElement;
const btnTurnoAntr = document.getElementById('btnTurnoAntr') as HTMLButtonElement;
const btnReset = document.getElementById('btnReset') as HTMLButtonElement;
const btnElegir = document.getElementById('btnElegir') as HTMLButtonElement;

if (btnTurnoSigu) {
   btnTurnoSigu.addEventListener("click", siguienteTurno);
}

if (btnTurnoAntr) {
   btnTurnoAntr.addEventListener('click', anteriorTurno);
}

if (btnReset) {
   btnReset.addEventListener('click', resetTurno);
}

if (btnElegir) {
   btnElegir.addEventListener('click', elegirTurnos);
}

actualizarTurno(numInicio);

/* Insere o valor numero  */
function insert(value: number) {
  const visor = document.getElementById("visor") as HTMLInputElement;
  visor.value += value;
}

/* Limpa o input */
function clearInput() {
  const visor = document.getElementById("visor") as HTMLInputElement;
  /* slice lê a string do incio ao fim e apaga os valores únicos */
  visor.value = visor.value.slice(0, -1);
}

function clearAll() {
  const visor = document.getElementById("visor") as HTMLInputElement;
  visor.value = "";
}

/* Apaga somente um */

function calculate() {
  const visor = document.getElementById("visor") as HTMLInputElement;
  try {
    /* Função avalia o valor inserido e entende que é um comando javascript */
    visor.value = eval(visor.value);
  } catch (error) {
    visor.value = "Erro";
  }
}

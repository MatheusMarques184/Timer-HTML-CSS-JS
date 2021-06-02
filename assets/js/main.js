function relogio() {
  function criaHoraDosSegundos(segundos) { //
    const data = new Date(segundos * 1000); // o js recebe como ms por isso a multiplicacao por 1000
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC' // bota o timer  como 00:00:00
    });
  }

  const relogio = document.querySelector('.relogio'); // resultado
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;  // fala qual elemento foi clicado na pagina

    if (el.classList.contains('zerar')) {
      clearInterval(timer); //para o tempo
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio();

// script.js

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button[data-action="criptografar"]').addEventListener('click', function () {
    processar('criptografar');
  });

  document.querySelector('button[data-action="descriptografar"]').addEventListener('click', function () {
    processar('descriptografar');
  });

  document.querySelector('button[data-action="copiar"]').addEventListener('click', copiarResultado);
});

function processar(acao) {
  var inputText = document.getElementById('inputText').value;
  var resultado;

  if (acao === 'criptografar') {
    resultado = criptografarTexto(inputText);
  } else if (acao === 'descriptografar') {
    resultado = descriptografarTexto(inputText);
  }

  document.getElementById('resultado').innerText = resultado;
}

function copiarResultado() {
  var resultado = document.getElementById('resultado').innerText;
  navigator.clipboard.writeText(resultado)
    .then(() => alert('Resultado copiado com sucesso!'))
    .catch(err => console.error('Erro ao copiar resultado: ', err));
}

function criptografarTexto(texto) {
  return texto.split('').reverse().join('');
}

function descriptografarTexto(texto) {
  return texto.split('').reverse().join('');
}

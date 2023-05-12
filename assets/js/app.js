//el codigo es una pagina que envia un error en la pantalla 


const baseEndpoint = 'https://api.github.com';    /* corregi la asignacionde las variables */
const usersEndpoint = `${baseEndpoint}/users`;     //usar await para la llamada de fetch
const $n = document.querySelector('.name');         //reemplase las comillas simples 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);

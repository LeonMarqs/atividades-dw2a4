const ul = document.querySelector('#states');

function findState(uf) {
  return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`);
}

async function returnResults() {
  try {
    const stateResponse = await findState('sp');
    const data = await stateResponse.json();
    ul.innerHTML = data.state;
  } catch(err) {
    ul.innerHTML = data.error;
  }
}


returnResults();
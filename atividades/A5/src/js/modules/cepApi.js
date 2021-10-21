export default class Cep {

  constructor() {
    this.cepToState();
  }

  cepToState() {
    document.getElementById('form-cep').addEventListener('submit', (e) => {
      e.preventDefault();
      let cep = document.getElementById('cep').value;
      
      cep = cep.replace(/\D/g, '');
      this.getState(Number(cep));
    })  
  }

  async getState(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const stateResponse = await fetch(url);
      const data = await stateResponse.json();
      console.log(data);
    } catch(err) {
      console.log(data.erro);
    }
  }
}


export default class Validation {

  constructor() {
    document.querySelector('form#form').addEventListener('submit', e => {
      e.preventDefault();
      this.nome();
      this.nascimento();
      this.email();
      this.outros('cpf');
      this.outros('fone');
      this.outros('cep');
    });
  }

  nome() {
    const inputNome = document.querySelector('input#nome');
    const regex = new RegExp('^([A-Za-z] *)+$', 'g');
    !regex.test(inputNome.value) ?
      this.erro('nome') : inputNome.classList.remove('errorInput');
  }

  nascimento() {
    const inputNascto = document.querySelector('input#dt_nasc');
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/g;

    const today = new Date();
    const currentYear = today.getFullYear();

    let day, month, year;

    if (inputNascto.value) {
      day = /^\d{2}/;
      day = inputNascto.value.match(day)[0];

      month = /\/\d{2}\//;
      month = inputNascto.value.match(month)[0].replaceAll('/', '');

      year = /\d{4}/;
      year = inputNascto.value.match(year)[0];
    }

    if (!regex.test(inputNascto.value) || day > 31 || month > 12 || year > currentYear) {
      this.erro('dt_nasc')
    } else {
      inputNascto.classList.remove('errorInput');
    }

  }

  email() {
    const inputEmail = document.querySelector('input#email');
    const regex = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$', 'i');
    !regex.test(inputEmail.value) ?
      this.erro('email') : inputEmail.classList.remove('errorInput');
  }

  erro(id) {
    document.getElementById(id).classList.add('errorInput');
  }

  outros(inputId) {
    let input = document.getElementById(inputId);
    if (!input.value) {
      this.erro(inputId);
    } else {
      input.classList.remove('errorInput')
    }
  }
}
export default class Masks {

  constructor() {
    document.querySelectorAll('input#cpf, input#dt_nasc, input#fone, input#cep').forEach(($input) => {
      const field = $input.dataset.js;
    
      $input.addEventListener('input', e => {
        e.target.value = this[field](e.target.value)
      }, false)
    });
  }

  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  date(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
      .replace(/(\/\d{4})\d+?$/, '$1')
  }

  fone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
};



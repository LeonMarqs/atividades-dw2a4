export default class Mask {

  constructor() {
    document.querySelector('input').forEach(($input) => {
      const field = $input.dataset.js;
    
      $input.addEventListener('input', e => {
        e.target.value = this[field](e.target.value)
      }, false)
    });
  }

  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
};



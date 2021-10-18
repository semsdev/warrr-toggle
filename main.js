const check = document.querySelector('#check');
const icons = document.querySelector('.icons');
const text = document.querySelector('.text');

check.addEventListener('change', () => {
  document.body.classList.toggle('arrr');

  if (text.innerHTML === 'ARRR') {
    text.innerHTML = 'wARRR';
  } else {
    text.innerHTML = 'ARRR';
  }
});

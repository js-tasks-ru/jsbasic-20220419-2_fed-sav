function toggleText() {
  let div = document.querySelector('#text');
  let btn = document.querySelector('.toggle-text-button');

  btn.addEventListener('click', (event) => {
    if (event.target = div) {
      if (div.hasAttribute('hidden')) {
        div.removeAttribute('hidden')
      } else {
        div.setAttribute('hidden', true)
      }
    }
  })
}

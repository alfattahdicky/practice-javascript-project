const titleEl = document.querySelectorAll('.title');
const textEl = document.querySelector('.text');
const arrowEl = document.querySelectorAll('i');

console.log(arrowEl)

titleEl.forEach(el => {
  el.addEventListener('click', function(e) {
    let text = el.nextElementSibling;
    let icon = el.children[1].children[0];

    if(text.classList.contains('active')) {
      text.classList.remove('active');
      icon.className = 'fas fa-angle-right';
    } else {
      text.classList.add('active');
      icon.className = 'fas fa-angle-down';
    }
  });  
})
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const imgs = document.querySelectorAll('img');


let index = 0;

rightEl.addEventListener('click', function (e) {
  if (index < imgs.length) {
    imgs[index].style.display = 'none';
    index++;
  } else if (index === imgs.length) {
    index = 0;
    imgs[index].style.display = 'block';
  };
});

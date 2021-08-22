const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const imgs = document.querySelectorAll('img');


let index = 0;


function slideImage() {
  for (let i = 0; i < imgs.length; i++) imgs[i].style.display = 'none';

  if (index > imgs.length - 1) index = 0;
  if (index < 0) index = imgs.length - 1;

  imgs[index].style.display = 'block';
}

function nextImage() {
  index++;
  slideImage();
}

function previousImage() {
  index--;
  slideImage();
}


leftEl.addEventListener('click', previousImage);
rightEl.addEventListener('click', nextImage);
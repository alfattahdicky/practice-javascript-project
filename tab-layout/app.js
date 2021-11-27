const tabLinks = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".content");
const tabActive = document.querySelector('.tab-active');
const tab = document.querySelector('.tab');
const offsetWidthTab = tab.offsetWidth;

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function () {
    for(let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
    }
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }

    tabLinks[i].classList.add('active');
    tabContent[i].classList.add("active");

    if(tabLinks[i].classList.contains('active')) {
      tabActive.style.transform = `translateX(${i * (offsetWidthTab / 2 - 30)}px)`;
    }
  });
}

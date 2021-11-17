const tabLinks = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".content");

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function () {
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }
    tabContent[i].classList.add("active");
  });
}

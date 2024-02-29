const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.querySelector(".accordion__content");
    const isOpen = content.style.maxHeight ? true : false;

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("is-open");
        otherItem.querySelector(".accordion__content").style.maxHeight = null;
      }
    });

    if (window.innerWidth < 768) {
      item.classList.add("is-open");
      content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const dataTexts = document.querySelectorAll(".data-text");
    const processedTexts = document.querySelectorAll(".processed-text");
  
    dataTexts.forEach((text, index) => {
      text.addEventListener("animationend", () => {
        processedTexts[index].style.animation = "floatUp 2s forwards ease-in-out";
        processedTexts[index].style.opacity = 1;
      });
    });
  });
  
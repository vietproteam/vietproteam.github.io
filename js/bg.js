let darkButton = document.querySelector(".dark-button");
    darkButton.addEventListener("click", function () {
      document.body.style.backgroundColor = "#1E272D";
      document
        .querySelectorAll(".heading")
        .forEach((item) => item.classList.add("dark"));
    })
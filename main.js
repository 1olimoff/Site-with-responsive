const modal = document.getElementById("burger");
const modalBtn = document.getElementById("mymodal-btn")



modalBtn.addEventListener("click", function (e) {
    modal.classList.toggle("active");
  });
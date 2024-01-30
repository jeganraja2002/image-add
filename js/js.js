const input = document.querySelector(".input");
const img = document.querySelector(".img");

const change = (e) => {};

input.addEventListener("change", (e) => {
  img.classList.remove("d-none");
  img.src = URL.createObjectURL(e.target.files[0]);
});

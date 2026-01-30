function goToPage() {
    window.location.href = "page2.html";
}
  let buttons = document.querySelectorAll(".seat-row button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active"); 
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".seat-row button");
  let output = document.getElementById("seats-selected");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");

      let count = document.querySelectorAll(".seat-row button.selected").length;
      output.innerText = count;
      result = count * 200;
      output2 = document.getElementById("total-price");
      output2.innerText = result;
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".book-now-btn");

  if (buttons.length > 0) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {

        let targetClass = btn.dataset.target;   
        let movieElement = document.querySelector("." + targetClass);

        if (movieElement) {
          localStorage.setItem("selectedMovie", movieElement.innerText);
        } else {
          localStorage.setItem("selectedMovie", "Movie not found");
        }

        window.location.href = "page2.html";
      });
    });
  }

  let output = document.getElementById("movie-selected");

  if (output) {
    let movie = localStorage.getItem("selectedMovie");
    output.innerText = movie ? movie : "No movie selected";
  }

});
let zoom = 100;

document.getElementById("zin").addEventListener("click", () => {
  zoom += 10;
  document.body.style.zoom = zoom + "%";
});

document.getElementById("zout").addEventListener("click", () => {
  zoom -= 10;
  document.body.style.zoom = zoom + "%";
});







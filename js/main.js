document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const cars = document.querySelectorAll(".car");

  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cars.forEach((car) => {
      const text = car.innerText.toLowerCase();
      car.style.display = text.includes(value) ? "" : "none";
    });
  });
});

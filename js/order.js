document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const car = document.getElementById("cars").value;

    const color = document.querySelector('input[name="color"]:checked');
    const features = document.querySelectorAll(
      'input[type="checkbox"]:checked',
    );

    if (!name || !email || !car) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!color) {
      alert("Please select a vehicle color.");
      return;
    }

    const selectedFeatures = [];
    features.forEach((f) => selectedFeatures.push(f.value));

    alert(
      "Order Submitted Successfully!\n\n" +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Car: ${car}\n` +
        `Color: ${color.value}\n` +
        `Features: ${selectedFeatures.length ? selectedFeatures.join(", ") : "None"}`,
    );

    form.reset();
  });
});

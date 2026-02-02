const carContainer = document.getElementById("car-container");

function displayData() {
  fetch("https://erikdederer.github.io/car-json-data/car.json")
    .then(res => res.json())
    .then(data => {
      carContainer.innerHTML = `
        <div class="car-card">
          <img src="${data.url}" alt="${data.brand} ${data.model}" />
          <h2>${data.brand} ${data.model}</h2>
          <p><strong>Year:</strong> ${data.year}</p>
          <p><strong>Price:</strong> $${data.price.toLocaleString()}</p>
          <p><strong>Fuel:</strong> ${data.isDiesel ? "Diesel" : "Not diesel"}</p>
        </div>
      `;
    });
}

displayData();

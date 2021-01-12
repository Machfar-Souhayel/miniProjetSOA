const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const forecast = new Forecast();

const updateUI = (data) => {
  // Destructuring
  const { cityDetails, weather } = data;

  // Update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
  `;

  // Update the night/day & icon image
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  // Remove the D-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  // Prevent default action
  e.preventDefault();

  // Get city value & reset the form
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Update the ui with the new city
  forecast
    .updateCity(city)
    .then((data) => {
      updateUI(data);
      console.log(data);
    })
    .catch((err) => console.log(err));

  // set local storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => {
      updateUI(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
}

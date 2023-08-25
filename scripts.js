// Select the button and image container elements from the DOM
const loadCatBtn = document.getElementById("loadCatBtn");
const catImageContainer = document.getElementById("catImageContainer");

const loadDogBtn = document.getElementById("loadDogBtn");
const dogImageContainer = document.getElementById("dogImageContainer");

const loadSuggestion = document.getElementById("funBtn");
const boredSuggestionText = document.getElementById("boredSuggestionText");
const dropdown = document.getElementById("dropdown");





function loadCatImage() {
  // Use the fetch() method to get a random cat image from the "The Cat API".
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json()) // Convert the response to JSON format
    .then((data) => {
      const catImageUrl = data[0].url; // Extract the image URL from the returned data

      // Create an <img> element and set its 'src' attribute to the fetched image URL
      const catImg = document.createElement("img");
      catImg.src = catImageUrl;

      // Clear any previous images and append the new image to the container
      catImageContainer.innerHTML = "";
      catImageContainer.appendChild(catImg);
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
    });
}

// Add a click event listener to the button
loadCatBtn.addEventListener("click", loadCatImage);

loadCatImage();

function loadDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // Note: The structure of the returned data from the dog API is different from the cat API.
      // You get the image URL directly from the 'message' property.
      const dogImageUrl = data.message;

      const dogImg = document.createElement("img");
      dogImg.src = dogImageUrl;

      // Clear any previous images and append the new image to the container.
      dogImageContainer.innerHTML = "";
      dogImageContainer.appendChild(dogImg);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
}


// Add a click event listener to the button
loadDogBtn.addEventListener("click", loadDogImage);

loadDogImage()


const types = [
	"education",
	"recreational",
	"social",
	"diy",
	"charity",
	"cooking",
	"relaxation",
	"music",
	"busywork"
];

const typesUpperCase = [
  "Education",
  "Recreational",
  "Social",
  "Do it yourself",
  "Charity",
  "Cooking",
  "Relaxation",
  "Music",
  "Busywork",
];


types.forEach((element, i) => {
	const option = document.createElement("option");
	option.value = element;
	option.text = typesUpperCase[i];
	dropdown.append(option);
});

loadSuggestion.addEventListener("click", async () => {
  const activityFetch = await fetch(
    `https://www.boredapi.com/api/activity?type=${dropdown.value}`
  );
  const activityData = await activityFetch.json();
  boredSuggestionText.textContent = activityData.activity;
});

function scrollToFun() {
  bored.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

function scrollToTop() {
  topAn.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
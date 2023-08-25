
const loadCatBtn = document.getElementById("loadCatBtn");
const catImageContainer = document.getElementById("catImageContainer");
const catBreedDropdown = document.getElementById("catBreedDropdown");
let catBreedIdMapping = {};


const loadDogBtn = document.getElementById("loadDogBtn");
const dogImageContainer = document.getElementById("dogImageContainer");
const breedDropdown = document.getElementById("breedDropdown");

const loadSuggestion = document.getElementById("funBtn");
const boredSuggestionText = document.getElementById("boredSuggestionText");
const dropdown = document.getElementById("dropdown");



// GET CATS IN --------------------------------------------------------------------------

function loadCatImage(breedId = "") {
  let apiUrl = breedId
    ? `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    : "https://api.thecatapi.com/v1/images/search";
    
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const catImageUrl = data[0].url; 
      const catImg = document.createElement("img");
      catImg.src = catImageUrl;
      catImageContainer.innerHTML = "";
      catImageContainer.appendChild(catImg);
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
    });
}


function populateCatBreedDropdown() {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed.id;  // using breed id as value
        option.text = breed.name; // breed name as display text
        catBreedDropdown.appendChild(option);
        
        catBreedIdMapping[breed.name] = breed.id; // Store the ID mapping
      });
    })
    .catch((error) => {
      console.error("Error fetching cat breeds:", error);
    });
}

populateCatBreedDropdown();

loadCatBtn.addEventListener("click", () => {
  const selectedCatBreedId = catBreedDropdown.value; 
  loadCatImage(selectedCatBreedId);
});


loadCatImage();






//GET DOGS IN -----------------------------------------------------------------------------

function loadDogImage(breed = "") {
  let apiUrl = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : "https://dog.ceo/api/breeds/image/random";
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageUrl = data.message;
      const dogImg = document.createElement("img");
      dogImg.src = dogImageUrl;
      dogImageContainer.innerHTML = "";
      dogImageContainer.appendChild(dogImg);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
}




function populateBreedDropdown() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message); 

      
      breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed;
        option.text = breed.charAt(0).toUpperCase() + breed.slice(1); 
        breedDropdown.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching dog breeds:", error);
    });
}

populateBreedDropdown();

loadDogBtn.addEventListener("click", () => {
  const selectedBreed = breedDropdown.value;
  loadDogImage(selectedBreed);
});


loadDogImage()








//BORED TO UNBORED SECTION ----------------------------------------------------------------

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
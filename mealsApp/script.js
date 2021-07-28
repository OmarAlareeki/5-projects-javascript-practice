const randomMealDiv = document.getElementById("random-meal");
const favMealDiv = document.getElementById("favMealsContainer");

getRandomMeal();
getFavMealIds();

async function getRandomMeal() {
    const fetchingRandomMeal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const res = await fetchingRandomMeal.json();
    const randomMeal = res.meals[0];

    addMeal(randomMeal, true)
}

async function getMealById(id) {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const respData = await resp.json();

    const meal = respData.meals[0];
    return meal;
}

async function getMealsBySearch(term) {
    const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?i="+term);
    const res = await fetchData.json();
}

function addMeal(mealData, random = true) {
    const meal = document.createElement('div');
    meal.classList.add('random-meal');

    meal.innerHTML = `
    <div class="meal-container">
        <h1>Ramdom meal</h1>
        <span>${mealData.strArea}</span>
        <img src="${mealData.strMealThumb}"/>
        <div id="ratingBox">
            <h4>${mealData.strMeal}</h4>
            <button id="likeBtn">
                <i class="fa fa-heart"></i>
            </button>
        </div>
    </div>
    `;
    randomMealDiv.appendChild(meal);

    const likeBtn = document.getElementById('likeBtn');
    likeBtn.addEventListener('click', () => {

        if(likeBtn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            likeBtn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            likeBtn.classList.add("active");
        }
    })
}

function addMealLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)))
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));
    return mealIds === null ? [] : mealIds;
}


async function getFavMealIds() {
    const mealIds = getMealsLS();

    for(var i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        meal = await getMealById(mealId);

        addFavMeal(meal)
    }
}

function addFavMeal(mealData) {
    const favMeal = document.createElement('li');
    const splitName = mealData.strMeal.split(' ');
    console.log()

    favMeal.innerHTML = `
        <img src="${mealData.strMealThumb}"/>
        <span>${splitName[0] + ' ' + splitName[splitName.length - 1]}</span>
    `;
    favMealDiv.appendChild(favMeal);
}

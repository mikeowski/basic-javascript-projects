const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const meals = document.getElementById('meals')
let results = []


searchBtn.addEventListener('click',async()=>{
        results = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`,{
        method:'GET',
    }).then(rs =>{return rs.json()})
    results = parseHtml(results.meals)
    meals.innerHTML = results
});



function parseHtml(mealList){
    const mealHtml = mealList.map(v =>{
        return `<div class="meal-container">
                    <img width="100%" height="100%" src="${v.strMealThumb}" alt="${v.strMeal}">
                    <div class="meal-child">
                        <h2>${v.strMeal}</h2>
                    </div>
               </div>`
    }).join('')
    return mealHtml
}




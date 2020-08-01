import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>
{
  const APP_ID = "aac0226e";
  const APP_KEY = "b670a8fed195839fde6568d7427b4085	";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Vegetarian');
  useEffect (
    () => {
      getRecipes();
    },[query]
  );

  const getRecipes = async () => {
    const response  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }
const updateSearch = (e) => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className = "App">
      <form className = "search-form" onSubmit = {getSearch}>
        <input type = "text" className ="search-bar" value = {search} onChange = {updateSearch}></input>
        <button className = "search-button" type = "submit"> Search </button>
      </form>
      
     <div className = "recipes">
     { recipes.map(recipe => (
        <Recipe 
        key = { recipe.recipe.label} 
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        servings = {recipe.recipe.yield}
        image = {recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients}
        nutrients = {recipe.recipe.totalNutrients}
        dietLabels = {recipe.recipe.dietLabels}
        healthLabels = {recipe.recipe.healthLabels}
        cautions = {recipe.recipe.cautions}
        />
        ))}
        </div>  
      { /* <div className = "nutritionTable">
        {recipes.map(recipe => (
        <NutritionFacts
        nutrients = {recipe.recipe.totalNutrients}
        /> 
        ))}
        </div> */}
  </div>
  );
}
export default App;

import RecipeList from "@/components/recipe-list";


async function fetchListOfRecipes() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/recipes",{cache:"no-cache"});
      const data = await apiResponse.json();
  
      return data?.recipes;
    } catch (e) {
      throw new Error(e);
    }
  }


export default async function(){
    const recipeList = await fetchListOfRecipes();
    return <>
    <RecipeList recipeList={recipeList}/>
    </>
}
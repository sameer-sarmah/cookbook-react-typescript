import { observable, action } from 'mobx';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../model/recipe';

export class RecipeStore {
    @observable
    recipes: Recipe[] = [];

    @observable
    selectedRecipe: Recipe;

    recipeSvc = new RecipeService();

    constructor() {
        this.recipes = this.recipeSvc.getRecipes();
        this.selectedRecipe = this.recipes[0];
      }


     getRecipe(recipeID: string) {
        return this.recipeSvc.getRecipe(recipeID);
     }

     @action
     setSelectedRecipe(selectedRecipe: Recipe) {
         this.selectedRecipe = selectedRecipe;
     }

     @action
     setSelectedRecipeById(selectedRecipeID: string) {
         this.selectedRecipe = this.getRecipe(selectedRecipeID);
     }
}

const recipeStore = new RecipeStore();
export default recipeStore;

import { action, observable } from 'mobx';
import { Recipe } from '../model/recipe';

export class CartStore {
  @observable
  recipesInCart: Recipe[] = [];

  @action
  public addToCart(selectedRecipe: Recipe) {
    if (!!selectedRecipe) {
      this.recipesInCart.push(selectedRecipe);
    }
  }

  @action
  public removeFromCart(recipe: Recipe) {
    const recipeID = recipe.recipe_id;
    let index = -1;
    for (let i = 0; i < this.recipesInCart.length; i++) {
      if (this.recipesInCart[i].recipe_id === recipeID) {
        index = i;
        break;
      }
    }
    this.recipesInCart.splice(index, 1);
  }
}

const cartStore = new CartStore();
export default cartStore;

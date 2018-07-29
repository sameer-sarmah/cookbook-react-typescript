import { Recipe } from '../model/recipe';



export class CartService {
  static recipesInCart: Recipe[] = [];


  static addToCart(recipe: Recipe) {
    const recipeID = recipe.recipe_id;
    if (!CartService.isContained(recipeID)) {
      CartService.recipesInCart.push(recipe);
    }

  }

  static removeFromCart(recipeID: string) {
   let index = -1;
   for (let i = 0; i < CartService.recipesInCart.length; i++) {
     if (CartService.recipesInCart[i].recipe_id === recipeID) {
       index = i;
       break;
     }
   }
   CartService.recipesInCart.splice(index, 1);
  }


  static isContained(recipeID: string) {
    const recipeItem = CartService.recipesInCart.find((recipe) => {
        return recipe.recipe_id === recipeID;
    });
    if (!recipeItem) {
      return false;
    } else {
      return true;
    }
  }

  static getRecipesInCart() {
    return CartService.recipesInCart;
  }

}

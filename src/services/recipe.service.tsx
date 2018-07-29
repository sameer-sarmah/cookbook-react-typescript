import { Recipe } from '../model/recipe';

export class RecipeService {
   public recipes: Recipe[] = [{
    'publisher': 'Closet Cooking',
    'f2f_url': 'http://food2fork.com/view/35171',
    'title': 'Buffalo Chicken Grilled Cheese Sandwich',
    'source_url': 'http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html',
    'recipe_id': '35171',
    'image_url': 'http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg',
    'social_rank': 90,
    'publisher_url': 'http://closetcooking.com',
    'ingredients': [
      '1/4 cup cooked shredded chicken, warm',
      '1 tablespoon hot sauce',
      '1/2 tablespoon mayo (optional)',
      '1 tablespoon carrot, grated',
      '1 tablespoon celery, sliced',
      '1 tablespoon green or red onion, sliced or diced'
    ],
    'directions': [
      'Mix the chicken, hot sauce, mayo, carrot, celery and onion in a small bowl.',
      'Butter the outside of each slice of bread, sprinkle half of the cheeses on the inside of one slice of bread, top with the buffalo chicken salad, the remaining cheese and finally the other slice of bread.',
      'Heat a non-stick pan over medium heat.',
      'Add the sandwich and grill until golden brown and the cheese has melted, about 2-4 minutes per side.'
    ]
  }, {
    'publisher': 'Closet Cooking',
    'f2f_url': 'http://food2fork.com/view/41470',
    'title': 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    'source_url': 'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
    'recipe_id': '41470',
    'image_url': 'http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
    'social_rank': 86,
    'publisher_url': 'http://closetcooking.com',
    'ingredients': [
      '1 cauliflower pizza crust (see below)',
      '1 cup chicken, cooked and shredded',
      '1/2 cup barbecue sauce',
      '3/4 cup mozzarella, shredded',
      '1/4 cup red onion, thinly sliced',
      '2 tablespoons cilantro, torn'
    ],
    'directions': [
      'Mix the chicken and barbecue sauce, top the pizza with the chicken, mozzarella and red onion and bake until the cheese is bubbling, about 10-15 minutes.'
    ]
  }, {
    'publisher': 'Closet Cooking',
    'f2f_url': 'http://food2fork.com/view/35118',
    'title': 'Bacon Wrapped Buffalo Chicken Jalapeno Poppers',
    'source_url': 'http://www.closetcooking.com/2012/03/bacon-wrapped-buffalo-chicken-jalapeno.html',
    'recipe_id': '35118',
    'image_url': 'http://static.food2fork.com/Bacon2BWrapped2BBuffalo2BChicken2BJalapeno2BPoppers2B5002B3668e0d793a2.jpg',
    'social_rank': 82,
    'publisher_url': 'http://closetcooking.com',
    'ingredients': [
      '12 large jalapenos, cut in half with seeds removed',
      '1 cup cooked chicken, shredded or diced and warm',
      '1/4 cup hot sauce (such as Frank\'s Red Hot)',
      '1 tablespoon butter, melted',
      '1/4 cup cheddar cheese'
    ],
    'directions': [
      'Place the jalapenos in a single layer on a baking pan with the cut side down and roast in a preheated 350F/180C oven for 10 minutes.',
      'Mix the hot sauce and the melted butter and then mix in the chicken.',
      'Fill the jalapenos with the buffalo chicken, top with cheese and wrap with bacon securing everything with a toothy pick.'
      ]
  }, {
    'publisher': 'Closet Cooking',
    'f2f_url': 'http://food2fork.com/view/35592',
    'title': 'Spicy Peanut Chicken Grilled Cheese Sandwich (aka The Chicken Satay Melt)',
    'source_url': 'http://www.closetcooking.com/2012/07/spicy-peanut-chicken-grilled-cheese.html',
    'recipe_id': '35592',
    'image_url': 'http://static.food2fork.com/Spicy2BPeanut2BChicken2BGrilled2BCheese2BSandwich2B5002B20038f4a63c9.jpg',
    'social_rank': 80,
    'publisher_url': 'http://closetcooking.com',
    'ingredients': [
      '1 tablespoon butter, room temperature',
      '2 slices bread',
      '1/2 cup cheddar cheese, shredded and room temperature',
      '1/4 cup chicken satay or plain chicken, shredded and warm',
      '2 tablespoons spicy peanut sauce'
    ],
    'directions': [
      'Warm a pan over medium heat.',
      'Butter one side of each slice of bread, place one slice in the pan buttered side down, sprinkle on half of the cheese, then top with the chicken, spicy peanut sauce, avocado, cilantro, sriracha and the remaining cheese followed by the remaining slice of bread, buttered side up.',
      'Cook until golden brown on both sides and the cheese is melted, about 2-4 minutes per side.'
    ]
  }

];



  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(id: string): Recipe  {
    const recipe = this.recipes.find(
      (rec) => {
        return rec.recipe_id === id;
      }
    );
    if (!!recipe) {
      return recipe;
    } else {
      return this.recipes[0];
    }

  }
}

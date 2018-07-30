import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Component } from 'react';
import { Recipe } from '../model/recipe';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { RecipeList } from './recipe-list/recipe-list.component';
import './recipes.component.css';
import { RecipeStore } from '../store/RecipeStore';
import { CartStore } from '../store/CartStore';

interface RecipeProp {
    RecipeStore: RecipeStore;
    CartStore: CartStore;
}

@inject('RecipeStore')
@inject('CartStore')
@observer
export class RecipeComponent extends Component<RecipeProp> {
   public recipes: Recipe[];
   public selectedRecipe: Recipe;



   recipeStore: RecipeStore;
   cartStore: CartStore;

   constructor(props: any) {
   super(props);
    this.recipeStore = this.props.RecipeStore;
    this.cartStore = this.props.CartStore;
  }

   render() {
    const panel = (
        <div className='flex-item flex-row-container height100pc width100pc' >
                <div className='width30pc' >{<RecipeList  {...this.props} recipes={this.recipeStore.recipes}/>}</div>
                <div className='width70pc'>{<RecipeDetail  {...this.props} selectedRecipe={this.recipeStore.selectedRecipe}
                    getRecipe={this.recipeStore.getRecipe}  setSelectedRecipe={this.recipeStore.setSelectedRecipe}
                    addToCart={this.cartStore.addToCart}/>}
                </div>
        </div>
    );
    return panel;
}
}


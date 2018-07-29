import { Component } from 'react';
import * as React from 'react';
import { RecipeService } from '../services/recipe.service';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import {RecipeList} from './recipe-list/recipe-list.component';
import './recipes.component.css';
import { Recipe } from '../model/recipe';


export class RecipeComponent extends Component {
   public recipes: Recipe[];
   public selectedRecipe: Recipe;
   public recipeSvc = new RecipeService();

   constructor(props: any) {
    super(props);
    this.recipes = this.recipeSvc.getRecipes();
    if (!!this.recipes && this.recipes instanceof Array && this.recipes.length > 0) {
     this.selectedRecipe = this.recipes[0];
    }
   }

   public setSelectedRecipe(recipeID: string) {
    this.selectedRecipe = this.recipeSvc.getRecipe(recipeID);
    this.setState({
        recipes: this.recipes,
        selectedRecipe: this.selectedRecipe
       });
   }

    public render() {
        const panel = (
            <div className='flex-item flex-row-container height100pc width100pc' >
                <div className='width30pc' >{<RecipeList {...this.props} recipes={this.recipes}/>}</div>
                <div className='width70pc'>{<RecipeDetail {...this.props}  selectedRecipe={this.selectedRecipe}/>}</div>
            </div>
        );
        return panel;
    }
}


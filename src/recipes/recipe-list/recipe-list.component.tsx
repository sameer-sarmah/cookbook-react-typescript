import { Component } from 'react';
import * as React from 'react';
import { Recipe } from '../../model/recipe';
import './recipe-list.component.css';

interface IRecipeListProp {
    recipes: Recipe[];
    match?: any;
    history?: any;
}

export class RecipeList extends Component <IRecipeListProp, {}> {

    public createRow(recipeItem: Recipe
    ) {
        const rows = (<li key={recipeItem.recipe_id} onClick={this.listItemClicked.bind(this, recipeItem)}>{recipeItem.title}</li>);
        return rows;
    }

    public render() {
        if (!this.props.recipes || this.props.recipes.length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className='flex-column-container lightBlueBG scroll-box'>
                <div className='flex-item text-block paleBlackTextColor '>
                    <ul className='recipe-item'>
                        {this.props.recipes.map(this.createRow.bind(this))}
                    </ul>
                </div>
            </div>
        );
        return table;
    }

    public listItemClicked(recipe: Recipe) {
        this.props.history.push(`/recipes/${recipe.recipe_id}`);
    }
}

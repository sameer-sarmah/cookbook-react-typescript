import { Component } from 'react';
import * as React from 'react';
import { Recipe } from '../../model/recipe';
import { CartService } from '../../services/cart-service.service';
import { RecipeService } from '../../services/recipe.service';
import './recipe-detail.component.css';

interface IRecipeDetailState {
    selectedRecipe: Recipe ;
}

interface IRecipeDetailProp {
    selectedRecipe: Recipe;
    match?: any;
}

export class RecipeDetail extends Component<IRecipeDetailProp, IRecipeDetailState> {
    public recipeSvc = new RecipeService();
    public state: IRecipeDetailState ;

    public createRow(listItem: string, index: number) {
        const rows = (<li key={index}>{listItem}</li>);
        return rows;
    }

    public componentDidMount() {
        this.setState({selectedRecipe: this.props.selectedRecipe});
    }

    public componentDidUpdate(prevProps: any, prevState: any) {
         let recipeID;
         if (!!this.props.match && !!this.props.match.params.id) {
             recipeID = this.props.match.params.id;
         }
         const selectedRecipe: Recipe = this.recipeSvc.getRecipe(recipeID);
         if (!!recipeID && (!prevState || recipeID !== prevState.selectedRecipe.recipe_id)) {
         this.setState({selectedRecipe});
         }
    }

    public addToCart() {
        if (!!this.state.selectedRecipe) {
          CartService.addToCart(this.state.selectedRecipe);
        }
      }

    public render() {
        if (!this.state || !this.state.selectedRecipe || this.state.selectedRecipe === null) {
            return (<div/>);
        } else {
        const image_url = this.state.selectedRecipe['image_url'];
        const title = this.state.selectedRecipe['title'];
        const ingredients: string[] = this.state.selectedRecipe['ingredients'];
        const directions: string[] = this.state.selectedRecipe['directions'];
        const table = (
            <div className='height100pc width100pc'>
                <div className='flex-column-container height100pc'>
                    <div className='flex-row-container flex-item textAlignCenter height55pc' >
                        <div className='flex-item height100pc'>
                            <img src={image_url} className='height100pc' />
                        </div>
                        <div className='flex-item text-block'>
                            <h2>{title}</h2>
                        </div>
                        <div className='flex-item '>
                            <button type='button' className='add-to-cart'
                            onClick={this.addToCart.bind(this)}>Add</button>
                        </div>
                    </div>

                    <div className='flex-row-container flex-item darkGreyBG height45pc'>
                        <div className='flex-item text-block whiteTextColor width40pc marginLeft5pc height100pc'>
                            <h2 className='height20pc no-margin'>Ingredients:</h2>
                            <ul className='height80pc no-margin overflow-hidden'>
                                {ingredients.map(this.createRow)}
                            </ul>
                        </div>
                        <div className='flex-item text-block whiteTextColor width60pc height100pc'>
                            <h2 className='height20pc no-margin'>Directions:</h2>
                            <ul className='height80pc no-margin  overflow-hidden'>
                                {directions.map(this.createRow)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        return table;
      }
    }
}


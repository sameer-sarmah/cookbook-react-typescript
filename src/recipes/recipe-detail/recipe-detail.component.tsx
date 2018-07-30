import * as React from 'react';
import { Component } from 'react';
import { Recipe } from '../../model/recipe';
import { CartStore } from '../../store/CartStore';
import { RecipeStore } from '../../store/RecipeStore';
import './recipe-detail.component.css';


interface IRecipeDetailProp {
    selectedRecipe: Recipe;
    RecipeStore?: RecipeStore;
    CartStore?: CartStore;
    match?: any;
    addToCart: Function;
    setSelectedRecipe: Function;
    getRecipe: Function;
}

export class RecipeDetail extends Component<IRecipeDetailProp> {


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
        const selectedRecipe = this.props.getRecipe.call(this.props.RecipeStore, recipeID);
        if (!!recipeID && recipeID !== prevProps.selectedRecipe.recipe_id) {
        this.props.setSelectedRecipe.call(this.props.RecipeStore, selectedRecipe);
        }
    }


    public render() {
        if (!this.props || !this.props.selectedRecipe || this.props.selectedRecipe === null) {
            return (<div/>);
        } else {
        const image_url = this.props.selectedRecipe['image_url'];
        const title = this.props.selectedRecipe['title'];
        const ingredients: string[] = this.props.selectedRecipe['ingredients'];
        const directions: string[] = this.props.selectedRecipe['directions'];
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
                            onClick={this.props.addToCart.bind(this.props.CartStore, this.props.selectedRecipe)}>Add</button>
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


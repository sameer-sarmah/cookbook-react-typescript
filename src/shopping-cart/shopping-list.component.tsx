import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Component } from 'react';
import { Recipe } from '../model/recipe';
import './shopping-list.component.css';


interface IShoppingListState {
  recipes: Recipe[] ;
}

@inject('CartStore')
@observer
export class ShoppingListComponent extends Component<any, IShoppingListState> {

  state = {recipes: []};
  cartStore: any;

  constructor(props: any) {
    super(props);
    this.cartStore = this.props.CartStore;
  }

  public componentDidMount() {

    this.cartStore = this.props.CartStore;
  }
  render() {
    if (
      !this.cartStore.recipesInCart ||
      this.cartStore.recipesInCart.length === 0
    ) {
      return (
        <div>
          <p>The Shopping cart is empty</p>
        </div>
      );
    } else {
      return (
        <div className='flex-item flex-row-container width100pc height100pc align-center'>
          <div>
            {this.cartStore.recipesInCart.map(this.createRow.bind(this))}
          </div>
        </div>
      );
    }
  }


  createRow(addedRecipe: Recipe) {
    const item = (
      <div
        className='flex-row-container list-item align-center'
        key={addedRecipe.recipe_id}
      >
        <div className='image-container flex-item'>
          <img src={addedRecipe.image_url} />
        </div>
        <div className='text-container flex-column-container flex-item'>
          <h3 className='flex-item'>Recipe Item:{addedRecipe.recipe_id}</h3>
          <h3 className='flex-item'>{addedRecipe.title}</h3>
          <div className='flex-item'>Social Rank:{addedRecipe.social_rank}</div>
        </div>
        <div className='flex-row-container list-item align-center'>
          <div
            className='flex-item svg-icon'
            onClick={this.cartStore.removeFromCart.bind(this.props.CartStore, addedRecipe)}
          >
            <img src={require('../images/rubbish-bin.svg')} />
          </div>
        </div>
      </div>
    );
    return item;
  }
}



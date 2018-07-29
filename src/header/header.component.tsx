import { Component } from 'react';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './header.component.css';

  class HeaderComponent extends Component<any, any> {

  public render() {
    const header = (
      <div id='header' className='header flex-item width100pc' >
        <nav role='navigation' className='width100pc'>
          <ul>
            <li className='flex-start' onClick={this.navigateTo.bind(this, '/recipes')}>
              <a >
                <img src={require('../images/rsz_recipes.jpg')} alt='rec' />
              </a>
            </li>
            <li className='flex-center'>
              <a >
                <div className='header-centered-text'>
                  The Cove Kitchen
              </div>
              </a>
            </li>
            <li className='flex-end'>

              <div className='flex-item go-to-cart-container'>
                <button type='button' className='go-to-cart' onClick={this.navigateTo.bind(this, '/cart')}>My Cart</button>
              </div>

            </li>
          </ul>
        </nav>
      </div>);
    return header;


  }

  public navigateTo(path: string) {
    this.props.history.push(path);
  }

}
export default withRouter(HeaderComponent);

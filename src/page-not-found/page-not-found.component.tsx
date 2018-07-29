import { Component } from 'react';
import * as React from 'react';

export class PageNotFoundComponent extends Component<{}, {}> {

  public render() {
    const panel = (
      <h3>This page was not found!</h3>
    );
    return panel;
  }

}

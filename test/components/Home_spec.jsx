import React from 'react/addons';
import {expect} from 'chai';
import {Home} from '../../src/components/Home';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass}
  = React.addons.TestUtils;

describe('Home', () => {
  it('works', () => {
    const component = renderIntoDocument(<Home/>);
    const entries = scryRenderedDOMComponentsWithClass(component, 'home');

    expect(entries.length).to.equal(1);
  });
});

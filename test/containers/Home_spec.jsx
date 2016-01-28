import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import {expect} from 'chai'
import {HomePure} from '../../src/containers/Home'


describe('Home', () => {
  it('works', () => {
    const component = ReactTestUtils.renderIntoDocument(<HomePure/>)
    const entries = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'p')

    expect(entries.length).to.equal(1)
  })
})

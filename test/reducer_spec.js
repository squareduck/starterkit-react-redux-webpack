import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles TEST_ACTION', () => {
    const initialState = {}
    const action = {
      type: 'TEST_ACTION'
    }

    const nextState = reducer(initialState, action)

    expect(nextState.common).to.equal(fromJS({
        success: true,
        buttonText: 'Click me!'
    }))
  })
})

import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles TEST_ACTION', () => {
    const initialState = Map()
    const action = {
      type: 'TEST_ACTION'
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
        common: {
          success: true,
          buttonText: 'Click me!'
        }
    }))
  })
})

import {Map} from 'immutable'

const initialState = Map({
  success: false,
  buttonText: 'Click me!'
})

export default function(state = initialState, action) {
  switch (action.type) {
  case 'TEST_ACTION':
    return state.merge({success: true})
  case 'CLICK_BUTTON':
    return state.merge({buttonText: 'Clicked!'})
  }

  return state
}

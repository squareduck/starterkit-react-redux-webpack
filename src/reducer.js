import {Map} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
  case 'TEST_ACTION':
    return state.merge({success: true});
  }

  return state;
}

// npm libs
import { createDuck } from 'redux-duck';

const duck = createDuck('ui', 'plaza-omega');

// types
const MY_ACTION = duck.defineType('MY_ACTION');

// actions
const myAction = duck.createAction(MY_ACTION);
export const myActionAsync = query => async dispatch => {
  try {
    // const jobs = await http.post('/jobs', { query });
    // dispatch(fetchJobsSuccess(jobs));
  } catch (error) {
    // dispatch(fetchJobsFail(error));
  }
};

// reducer
const initialState = {
  outputMessage: {
    type: 'SUCCESS',
    description: '',
  },
  showModal: false,
};

export default duck.createReducer(
  {
    // [MY_ACTION]: (state, { payload }) => ({ message: '', results: payload }),
  },
  initialState,
);

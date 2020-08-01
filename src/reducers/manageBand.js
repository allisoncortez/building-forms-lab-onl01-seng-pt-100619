export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    //concat a new band (each time the action is dispatched)
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band]}
    default:
      return state
  }
};

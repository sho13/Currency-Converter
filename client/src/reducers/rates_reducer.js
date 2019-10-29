const DEFAULT_STATE = {
  countries: {},
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'GET_RATES':
      return Object.assign({}, state, { countries: action.payload.data.rates });
    default:
      return state;
  }
}
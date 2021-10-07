import actions from '../actionTypes'

const initialState = {
  photos: [],
}

export function photosReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_PHOTOS:
      return {
        photos: action.payload,
      }
    default:
      return state
  }
}

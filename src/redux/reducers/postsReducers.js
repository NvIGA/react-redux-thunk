import actions from '../actionTypes'

const initialState = {
  posts: [],
}

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return {
        posts: action.payload,
      }
    default:
      return state
  }
}

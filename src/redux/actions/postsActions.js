import actionTypes from '../actionTypes'

export function fetchPosts() {
  return async (dispatch, getState) => {
    try {
      const URL = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(URL)
      const posts = await response.json()
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: posts,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

import actionTypes from '../actionTypes'
import loadings from '../loadings'
import { finishLoading, startLoading } from './loadingsAction'

export function fetchPhotos() {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading(loadings.FETCH_PHOTOS_LOADING))
      const URL = 'https://jsonplaceholder.typicode.com/photos'
      const response = await fetch(URL)
      const photos = await response.json()

      dispatch({
        type: actionTypes.FETCH_PHOTOS,
        payload: photos.slice(0, 20),
      })
      dispatch(finishLoading(loadings.FETCH_PHOTOS_LOADING))
    } catch (e) {
      console.log(e)
    }
  }
}

import actionTypes from '../actionTypes'

export function startLoading(actionType) {
  return async (dispatch, getState) => {
    try {
      const { loadingsReducer } = getState()
      console.log(loadingsReducer)
      dispatch({
        type: actionTypes.START_LOADING,
        payload: [...loadingsReducer.loadings, actionType],
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function finishLoading(actionType) {
  return async (dispatch, getState) => {
    try {
      const { loadingsReducer } = getState()
      console.log(
        loadingsReducer.loadings.filter(
          (el) => el !== actionType
        )
      )
      dispatch({
        type: actionTypes.FINISH_LOADING,
        payload: loadingsReducer.loadings.filter(
          (el) => el !== actionType
        ),
      })
    } catch (e) {
      console.log(e)
    }
  }
}

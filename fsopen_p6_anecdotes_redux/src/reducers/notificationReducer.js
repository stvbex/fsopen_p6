const initialState = {
  content: '',
  resetId: -1
}

const notificationReducer  = (state = initialState, action) => {
  // console.log('state:', state)
  // console.log('action:', action)
  switch (action.type) {
    case 'NOTIFY':
      // cancel previous reset timer
      if (state.resetId !== -1) {
        clearTimeout(state.resetId)
      }

      return action.data
    case 'RESET_NOTIFY':
      return initialState
    default:
      return state
  }
}

export const setNotification = (content, sec) => {
  return async dispatch => {
    const resetId = setTimeout(() => dispatch(resetNotification()), sec * 1000)

    dispatch({
      type: 'NOTIFY',
      data: {
        content,
        resetId
      }
    })
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFY'
  }
}

export default notificationReducer
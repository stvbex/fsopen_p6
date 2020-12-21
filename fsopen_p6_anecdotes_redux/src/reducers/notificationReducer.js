const notificationReducer  = (state = '', action) => {
  // console.log('state:', state)
  // console.log('action:', action)
  switch (action.type) {
    case 'NOTIFY':
      return action.data.notification
    case 'RESET_NOTIFY':
      return ''
    default:
      return state
  }
}

export const setNotification = (content, sec) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFY',
      data: {
        notification: content
      }
    })

    setTimeout(() => dispatch(resetNotification()), sec * 1000)
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFY'
  }
}

export default notificationReducer
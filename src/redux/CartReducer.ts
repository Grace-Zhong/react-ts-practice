const initialState = {
  jbgz: 0,
  dj: 0,
}

export const cart = (state = initialState, action: any) => {
  switch (action.type) {
    case "BUY_JBGZ":
      return {
        ...state,
        jbgz: state.jbgz + action.payload
      }
    default:
      return state;
  }
}
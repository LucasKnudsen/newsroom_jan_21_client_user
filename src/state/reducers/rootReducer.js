import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLE_TYPE":
      return {
        ...state,
        articleType: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;

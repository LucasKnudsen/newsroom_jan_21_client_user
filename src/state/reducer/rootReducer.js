import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORY":
      return {
        ...state,
        articleType: 'story'
      }
    case "EXPERIENCE":
      debugger
      return {
        ...state,
        articleType: 'experience'
      }
    default:
      return state
  }
}
export default rootReducer;
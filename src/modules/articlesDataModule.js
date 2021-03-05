import axios from 'axios'
import store from '../state/store/configureStore'

const getSingleArticle = async (id) => {
  try {
    let response = await axios.get(`/articles/${id}`)
    store.dispatch({type: "SET_SINGLE_CONTENT", payload: response.data.article}) 
  } catch (error) {
    store.dispatch({
      type: "ERROR_HANDLER",
      payload: error.response ? error.response.data.message : error.message
    })
  }
}

const getExploreArticles = async (articleType) => {
  try {
    let response = await axios.get(`/articles?article_type=${articleType}`)
    store.dispatch({type: "EXPLORE_ARTICLES", payload: response.data.articles})
  } catch (error) {
    store.dispatch({
      type: "ERROR_HANDLER",
      payload: error.response ? error.response.data.message : error.message
    })
  }
}

export { getExploreArticles, getSingleArticle }

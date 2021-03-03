import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const getExploreArticles = async (articleType) => {
  let response = await axios.get(`/api/articles?article_type=${articleType}`)
  return response.data.articles
}

export {getExploreArticles}
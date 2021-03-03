import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const getExploreArticles = async () => {
  let response = await axios.get('/api/articles?article_type=story')
  return response.data.articles
}

export {getExploreArticles}
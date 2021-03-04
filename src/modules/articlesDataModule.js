import axios from 'axios'

const getExploreArticles = async (articleType) => {
  let response = await axios.get(`/api/articles?article_type=${articleType}`)
  return response.data.articles
}

export {getExploreArticles}
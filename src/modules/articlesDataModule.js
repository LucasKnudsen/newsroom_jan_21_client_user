import axios from 'axios'

const getExploreArticles = async (articleType) => {
<<<<<<< HEAD
  let response = await axios.get(`/api/articles?article_type=${articleType}`)
=======
  let response = await axios.get(`/articles?article_type=${articleType}`)
>>>>>>> 383191dde2a7ae271f374793666b2778f765e65a
  return response.data.articles
}

export { getExploreArticles }
